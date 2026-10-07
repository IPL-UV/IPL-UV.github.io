#!/usr/bin/env python3
"""Convierte los .bib de assets/bibfiles a data/publications/*.json para render SSR.

Sin dependencias. Se ejecuta antes de `hugo` (local y en CI).
Uso: python3 scripts/bib_to_json.py
"""
import glob
import json
import os
import re
import sys
import unicodedata

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BIB_DIR = os.path.join(ROOT, "assets", "bibfiles")
OUT_DIR = os.path.join(ROOT, "data", "publications")
CONTENT_DIR = os.path.join(ROOT, "content", "publications")

MARKS = {
    "'": "\u0301", '"': "\u0308", "`": "\u0300", "^": "\u0302", "~": "\u0303",
    "=": "\u0304", ".": "\u0307", "u": "\u0306", "v": "\u030c", "H": "\u030b",
    "k": "\u0328", "r": "\u030a", "c": "\u0327", "d": "\u0323", "b": "\u0331",
}
SPECIALS = {
    r"{\o}": "ø", r"\o": "ø", r"{\O}": "Ø", r"\O": "Ø", r"{\ss}": "ß", r"\ss": "ß",
    r"{\aa}": "å", r"\aa": "å", r"{\AA}": "Å", r"\AA": "Å", r"{\l}": "ł", r"\l": "ł",
    r"{\L}": "Ł", r"\L": "Ł", r"{\ae}": "æ", r"\ae": "æ", r"{\AE}": "Æ", r"\AE": "Æ",
    r"{\i}": "i", r"\i": "i", r"{\j}": "j", r"\j": "j",
}


def latex_clean(s):
    if not s:
        return ""
    def rep(m):
        return m.group("ch") + MARKS.get(m.group("acc"), "")
    s = re.sub(r"\{\\(?P<acc>[`'\"\^~=\.uvHkrcbd])\{?\\?(?P<ch>[a-zA-Z])\}?\}", rep, s)
    s = re.sub(r"\\(?P<acc>[`'\"\^~=\.uvHkrcbd])\{?\\?(?P<ch>[a-zA-Z])\}?", rep, s)
    for k, v in SPECIALS.items():
        s = s.replace(k, v)
    s = s.replace("---", "\u2014").replace("--", "\u2013")
    s = s.replace(r"\&", "&").replace(r"\%", "%").replace(r"\$", "$").replace(r"\#", "#")
    s = s.replace(r"\ ", " ")
    s = s.replace("{", "").replace("}", "")
    s = re.sub(r"\\[a-zA-Z]+\s?", "", s)
    s = unicodedata.normalize("NFC", s)
    return re.sub(r"\s+", " ", s).strip()


def find_matching(text, start):
    depth = 0
    i = start
    n = len(text)
    while i < n:
        c = text[i]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                return i
        i += 1
    raise ValueError("llave sin cerrar")


def parse_fields(body):
    fields = {}
    i, n = 0, len(body)
    while i < n:
        while i < n and body[i] in " \t\r\n,":
            i += 1
        if i >= n:
            break
        j = i
        while j < n and (body[j].isalnum() or body[j] in "_-"):
            j += 1
        key = body[i:j].strip().lower()
        if not key:
            i += 1
            continue
        while j < n and body[j] in " \t\r\n":
            j += 1
        if j >= n or body[j] != "=":
            i = j + 1
            continue
        j += 1
        while j < n and body[j] in " \t\r\n":
            j += 1
        if j >= n:
            break
        if body[j] == "{":
            end = find_matching(body, j)
            val = body[j + 1:end]
            j = end + 1
        elif body[j] == '"':
            k = j + 1
            while k < n and body[k] != '"':
                if body[k] == "\\":
                    k += 1
                k += 1
            val = body[j + 1:k]
            j = k + 1
        else:
            k = j
            while k < n and body[k] not in ",}\r\n":
                k += 1
            val = body[j:k].strip()
            j = k
        fields[key] = re.sub(r"\s+", " ", val).strip()
        i = j
    return fields


def parse_bib(text):
    entries = []
    i, n = 0, len(text)
    while True:
        at = text.find("@", i)
        if at < 0:
            break
        m = re.match(r"@(\w+)\s*\{\s*([^,\s]+)\s*,", text[at:])
        if not m:
            i = at + 1
            continue
        etype = m.group(1).lower()
        key = m.group(2).strip()
        brace = text.index("{", at)
        end = find_matching(text, brace)
        body = text[at + m.end():end]
        if etype not in ("comment", "preamble", "string"):
            entries.append({"type": etype, "key": key, "fields": parse_fields(body),
                            "raw": text[at:end + 1].strip()})
        i = end + 1
    return entries


def split_authors(authors):
    if not authors:
        return []
    if " and " in authors:
        parts = authors.split(" and ")
    elif authors.count(",") > 1:
        parts = authors.split(",")
    else:
        parts = [authors]
    return [p.strip() for p in parts if p.strip()]


def format_authors(authors):
    out = []
    for a in split_authors(authors):
        a = a.strip()
        if "," in a:
            last, first = [p.strip() for p in a.split(",", 1)]
            words = first.split()
            init = (words[0][0].upper() + ".") if words else ""
            out.append((last + " " + init).strip())
        else:
            words = a.split()
            if len(words) == 1:
                out.append(words[0])
            else:
                out.append(f"{words[-1]} {words[0][0].upper()}.")
    if len(out) > 12:
        out = out[:12] + ["others"]
    if len(out) > 1:
        return ", ".join(out[:-1]) + " and " + out[-1]
    return out[0] if out else ""


def format_projects(projects):
    arr = [p.strip() for p in projects.split(",") if p.strip()]
    arr = [p[:-8].strip() if p.endswith(" Project") else p for p in arr]
    seen = []
    for p in arr:
        if p not in seen:
            seen.append(p)
    seen.sort()
    return ", ".join(seen)


def norm_entry(e):
    f = e["fields"]
    get = lambda k: latex_clean(f.get(k, ""))
    year = re.sub(r"\.$", "", get("year")).strip()
    doi = get("doi")
    doi_bare = re.sub(r"^https?://(dx\.)?doi\.org/", "", doi)
    doi_bare = re.sub(r"^(dx\.)?doi\.org/", "", doi_bare)
    doi_url = doi
    if doi and not doi.startswith("http"):
        if doi.startswith("doi.org"):
            doi_url = "https://" + doi
        elif re.match(r"^10\.\d+", doi):
            doi_url = "https://doi.org/" + doi
    out = {
        "key": e["key"],
        "type": e["type"],
        "title": get("title"),
        "author": format_authors(get("author")),
        "journal": get("journal"),
        "booktitle": get("booktitle"),
        "volume": get("volume"),
        "number": get("number"),
        "pages": get("pages"),
        "year": year,
        "publisher": get("publisher"),
        "address": get("address"),
        "project": format_projects(get("project")),
        "doi": doi,
        "doi_bare": doi_bare,
        "doi_url": doi_url,
        "url": get("url"),
        "pdf": get("pdf"),
        "arxiv": get("arxiv"),
        "video": get("video"),
        "code": get("code"),
        "altimetric": get("altimetric"),
        "abstract": get("abstract"),
        "raw": e["raw"],
    }
    return {k: v for k, v in out.items() if v}


def read_bib(path):
    raw = open(path, "rb").read()
    try:
        return raw.decode("utf-8")
    except UnicodeDecodeError:
        print(f"AVISO: {os.path.basename(path)} no es UTF-8; leído como latin-1", file=sys.stderr)
        return raw.decode("latin-1")


def content_bibfiles():
    """Nombres base de los bibfiles declarados en content/publications/*.md."""
    names = set()
    for md in glob.glob(os.path.join(CONTENT_DIR, "*.md")):
        for m in re.finditer(r"bibfiles/([\w-]+)\.bib", open(md, encoding="utf-8").read()):
            names.add(m.group(1))
    return names


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    generated = set()
    problems = []
    for path in sorted(glob.glob(os.path.join(BIB_DIR, "*.bib"))):
        name = os.path.splitext(os.path.basename(path))[0]
        try:
            entries = [norm_entry(e) for e in parse_bib(read_bib(path))]
        except ValueError as exc:
            problems.append(f"{os.path.basename(path)}: {exc}")
            continue
        # dedupe por citekey (gana la última aparición), conservando el orden
        seen = {}
        dups = 0
        for e in entries:
            if e["key"] in seen:
                dups += 1
            seen[e["key"]] = e
        entries = list(seen.values())
        if not entries:
            problems.append(f"{name}.bib: 0 entradas")
            continue
        out = os.path.join(OUT_DIR, f"{name}.json")
        with open(out, "w", encoding="utf-8") as fh:
            json.dump(entries, fh, ensure_ascii=False, indent=0)
        generated.add(name)
        msg = f"{name}: {len(entries)} entradas"
        if dups:
            msg += f" ({dups} citekeys duplicadas colapsadas)"
        print(msg)
    for missing in sorted(content_bibfiles() - generated):
        problems.append(f"content declara bibfiles/{missing}.bib pero no hay JSON")
    for orphan in sorted(generated - content_bibfiles()):
        problems.append(f"assets/bibfiles/{orphan}.bib no lo usa ninguna pagina de content")
    if problems:
        print("PROBLEMAS:", file=sys.stderr)
        for p in problems:
            print("  -", p, file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
