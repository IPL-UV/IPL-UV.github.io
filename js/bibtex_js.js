// Issues:
//  no comment handling within strings
//  no string concatenation
//  no variable values yet

// Grammar implemented here:
//  bibtex -> (string | preamble | comment | entry)*;
//  string -> '@STRING' '{' key_equals_value '}';
//  preamble -> '@PREAMBLE' '{' value '}';
//  comment -> '@COMMENT' '{' value '}';
//  entry -> '@' key '{' key ',' key_value_list '}';
//  key_value_list -> key_equals_value (',' key_equals_value)*;
//  key_equals_value -> key '=' value;
//  value -> value_quotes | value_braces | key;
//  value_quotes -> '"' .*? '"'; // not quite
//  value_braces -> '{' .*? '"'; // not quite

function author_tex_reformat(input) {
  const authors = input.split(',').map(author => author.trim()); // Dividir por ',' y limpiar espacios
  if (authors.length > 1) {
      // Unir todos menos el último con ', ' y el último con ' and '
      return authors.slice(0, -1).join(', ') + ' and ' + authors[authors.length - 1];
  } else {
      // Si no hay ',' devolver el autor como está
      return authors[0];
  }
}

  
  class BibtexParser {
    constructor() {
      this.pos = 0;
      this.input = "";
      this.entries = {};
      this.strings = {
        JAN: "January",
        FEB: "February",
        MAR: "March",
        APR: "April",
        MAY: "May",
        JUN: "June",
        JUL: "July",
        AUG: "August",
        SEP: "September",
        OCT: "October",
        NOV: "November",
        DEC: "December"
      };
  
      this.currentKey = "";
      this.currentEntry = "";
  
      this.setInput = function (t) {
        this.input = t;
      };
  
      this.getEntries = function () {
        return this.entries;
      };
  
      this.isWhitespace = function (s) {
        return (s == ' ' || s == '\r' || s == '\t' || s == '\n');
      };
  
      this.match = function (s) {
        this.skipWhitespace();
        if (this.input.substring(this.pos, this.pos + s.length) == s) {
          this.pos += s.length;
        }
        else {
          throw "Token mismatch, expected " + s + ", found " + this.input.substring(this.pos);
        }
        this.skipWhitespace();
      };
  
      this.tryMatch = function (s) {
        this.skipWhitespace();
        if (this.input.substring(this.pos, this.pos + s.length) == s) {
          return true;
        }
        else {
          return false;
        }
        this.skipWhitespace();
      };
  
      this.skipWhitespace = function () {
        while (this.isWhitespace(this.input[this.pos])) {
          this.pos++;
        }
        if (this.input[this.pos] == "%") {
          while (this.input[this.pos] != "\n") {
            this.pos++;
          }
          this.skipWhitespace();
        }
      };
  
      this.value_braces = function () {
        var bracecount = 0;
        this.match("{");
        var start = this.pos;
        while (true) {
          if (this.input[this.pos] == '}' && this.input[this.pos - 1] != '\\') {
            if (bracecount > 0) {
              bracecount--;
            }
            else {
              var end = this.pos;
              this.match("}");
              return this.input.substring(start, end);
            }
          }
          else if (this.input[this.pos] == '{') {
            bracecount++;
          }
          else if (this.pos == this.input.length - 1) {
            throw "Unterminated value";
          }
          this.pos++;
        }
      };
  
      this.value_quotes = function () {
        this.match('"');
        var start = this.pos;
        while (true) {
          if (this.input[this.pos] == '"' && this.input[this.pos - 1] != '\\') {
            var end = this.pos;
            this.match('"');
            return this.input.substring(start, end);
          }
          else if (this.pos == this.input.length - 1) {
            throw "Unterminated value:" + this.input.substring(start);
          }
          this.pos++;
        }
      };
  
      this.single_value = function () {
        var start = this.pos;
        if (this.tryMatch("{")) {
          return this.value_braces();
        }
        else if (this.tryMatch('"')) {
          return this.value_quotes();
        }
        else {
          var k = this.key();
          if (this.strings[k.toUpperCase()]) {
            return this.strings[k];
          }
          else if (k.match("^[0-9]+$")) {
            return k;
          }
          else {
            throw "Value expected:" + this.input.substring(start);
          }
        }
      };
  
      this.value = function () {
        var values = [];
        values.push(this.single_value());
        while (this.tryMatch("#")) {
          this.match("#");
          values.push(this.single_value());
        }
        return values.join("");
      };
  
      this.key = function () {
        var start = this.pos;
        while (true) {
          if (this.pos == this.input.length) {
            throw "Runaway key";
          }
          if (this.input[this.pos].match("[a-zA-Z0-9_:\\./-]")) {
            this.pos++;
          }
          else {
            return this.input.substring(start, this.pos).toUpperCase();
          }
        }
      };
  
      this.key_equals_value = function () {
        var key = this.key();
        if (this.tryMatch("=")) {
          this.match("=");
          var val = this.value();
          return [key, val];
        }
        else {
          throw "... = value expected, equals sign missing:" + this.input.substring(this.pos);
        }
      };
  
      this.key_value_list = function () {
        // this.entries[this.currentEntry]['bibtex'] = this. ????????;
        var kv = this.key_equals_value();
        this.entries[this.currentEntry][kv[0]] = kv[1];
        while (this.tryMatch(",")) {
          this.match(",");
          // fixes problems with commas at the end of a list
          if (this.tryMatch("}")) {
            break;
          }
          kv = this.key_equals_value();
          this.entries[this.currentEntry][kv[0]] = kv[1];
        }
      };
  
      this.entry_body = function () {
        this.currentEntry = this.key();
        this.entries[this.currentEntry] = new Object();
        this.match(",");
        this.key_value_list();
      };
  
      this.directive = function () {
        this.match("@");
        return "@" + this.key();
      };
  
      this.string = function () {
        var kv = this.key_equals_value();
        this.strings[kv[0].toUpperCase()] = kv[1];
      };
  
      this.preamble = function () {
        this.value();
      };
  
      this.comment = function () {
        this.value(); // this is wrong
      };
  
      this.entry = function () {
        this.entry_body();
      };
  
      this.bibtex = function () {
        var is_entry = false;
        while (this.tryMatch("@")) {
          var lastpos = this.pos;
          var d = this.directive().toUpperCase();
          this.match("{");
          if (d == "@STRING") {
            this.string();
          }
          else if (d == "@PREAMBLE") {
            this.preamble();
          }
          else if (d == "@COMMENT") {
            this.comment();
          }
          else {
            this.entry();
            is_entry = true;
          }
          this.match("}");
          // if (is_entry == true) {
          // this.entries[this.currentEntry]['BIBTEX'] = "<pre>" + this.input.substring(this.pos, lastpos).trim() + "</pre>";
          this.entries[this.currentEntry]['BIBTEX'] = this.input.substring(this.pos, lastpos).trim().
            replace(/\n/g, "<br /> &#160;&#160;").replace(/\}/g, "&#125;").replace(/\{/g, "&#123;");
          // is_entry = false;
          // }
        }
      };
    }
  }
    
  class BibtexDisplay {
    constructor() {
      this.fixValue = function (value) {
        // Diccionario de reemplazos mapeando patrones a sus reemplazos {\'\i}
        const replacements = [
            [/{\\&}/g, '&'], [/{\\'\\i}/g, 'í'],[/\\'{c}/g, 'ć'],
            [/\\'{a}/g, 'á'], [/\\'{e}/g, 'é'], [/\\'{i}/g, 'í'], [/\\'{o}/g, 'ó'], [/\\'{u}/g, 'ú'], [/\\'{y}/g, 'ý'], [/\\'{A}/g, 'Á'], [/\\'{E}/g, 'É'], [/\\'{I}/g, 'Í'], [/\\'{O}/g, 'Ó'], [/\\'{U}/g, 'Ú'], [/\\'{Y}/g, 'Ý'],
            [/\\"{\\a}/g, 'ä'], [/\\"{\\e}/g, 'ë'], [/\\"{\\i}/g, 'ï'], [/\\"{\\o}/g, 'ö'], [/\\"{\\u}/g, 'ü'], [/\\"{\\y}/g, 'ÿ'], [/\\"{\\A}/g, 'Ä'], [/\\"{\\E}/g, 'Ë'], [/\\"{\\O}/g, 'Ö'], [/\\"{\\U}/g, 'Ü'], [/\\"{\\Y}/g, 'Ÿ'],
            [/\\'{\\i}/g, 'í'],[/\\'{\\a}/g, 'á'], [/\\'{\\e}/g, 'é'], [/\\'{\\o}/g, 'ó'], [/\\'{\\u}/g, 'ú'], [/\\'{\\y}/g, 'ý'], [/\\'{\\A}/g, 'Á'], [/\\'{\\E}/g, 'É'], [/\\'{\\O}/g, 'Ó'], [/\\'{\\U}/g, 'Ú'], [/\\'{\\Y}/g, 'Ý'],
            [/{\\'\\a}/g, 'á'], [/{\\'\\e}/g, 'é'], [/{\\'\\i}/g, 'í'], [/{\\'\\o}/g, 'ó'], [/{\\'\\u}/g, 'ú'],
            [/{\\'\\a}/g, 'á'], [/{\\'\\e}/g, 'é'], [/{\\'i\\-\\}/g, 'í'], [/{\\'\\o}/g, 'ó'], [/{\\'\\u}/g, 'ú'],
            [/\\glqq\s?/g, '&bdquo;'], [/\\grqq\s?/g, '&rdquo;'], [/\\ /g, '&nbsp;'], [/\\url/g, ''], [/---/g, '&mdash;'], [/\\`[aA]/g, 'à'], [/\\`{a}/g, 'à'], [/\\'[aA]/g, '&aacute;'], [/{\\'a}/g, '&aacute;'], [/\\`[eE]/g, 'è'], [/\\`{e}/g, 'è'], [/\\'[eE]/g, '&eacute;'], [/{\\'e}/g, '&eacute;'], [/\\`[iI]/g, 'ì'], [/\\`{i}/g, 'ì'],[/\\'[iI]/g, '&iacute;'], [/{\\'i}/g, '&iacute;'], [/\\`[oO]/g, 'ò'], [/\\`{o}/g, 'ò'], [/\\'[oO]/g, '&oacute;'], [/{\\'o}/g, '&oacute;'], [/\\`[uU]/g, 'ù'], [/\\`{u}/g, 'ù'], [/\\'[uU]/g, '&uacute;'], [/{\\'u}/g, '&uacute;'], [/\{(.*?)\}/g, '$1'], [/{\'{a}}/g, 'á'], [/{\\'{c}}/g, 'ć'], [/{\'{e}}/g, 'é'], [/{\'{g}}/g, 'ǵ'], [/{\'{i}}/g, 'í'], [/{\'{n}}/g, 'ń'], [/{\'{o}}/g, 'ó'], [/{\'{r}}/g, 'ŕ'], [/{\'{s}}/g, 'ś'], [/{\'{u}}/g, 'ú'], [/{\'{w}}/g, 'ẃ'], [/{\'{y}}/g, 'ý'], [/{\'{z}}/g, 'ź'], [/{\'{\a}}/g, 'á'], [/{\'{\c}}/g, 'ć'], [/{\'{\e}}/g, 'é'], [/{\'{\g}}/g, 'ǵ'], [/{\'{\i}}/g, 'í'], [/{\'{\n}}/g, 'ń'], [/{\'{\o}}/g, 'ó'], [/{\'{\r}}/g, 'ŕ'], [/{\'{\s}}/g, 'ś'], [/{\'{\u}}/g, 'ú'], [/{\'{\w}}/g, 'ẃ'], [/{\'{\y}}/g, 'ý'], [/{\'{\z}}/g, 'ź'], [/{\' a}/g, 'á'],[/{\' c}/g, 'ć'], [/{\' e}/g, 'é'], [/{\' g}/g, 'ǵ'], [/{\' i}/g, 'í'], [/{\' n}/g, 'ń'], [/{\' o}/g, 'ó'], [/{\' r}/g, 'ŕ'], [/{\' s}/g, 'ś'], [/{\' u}/g, 'ú'], [/{\' w}/g, 'ẃ'], [/{\' y}/g, 'ý'], [/{\' z}/g, 'ź'], [/{\'a}/g, 'á'], [/{\'c}/g, 'ć'], [/{\'e}/g, 'é'], [/{\'g}/g, 'ǵ'], [/{\'i}/g, 'í'], [/{\'n}/g, 'ń'], [/{\'o}/g, 'ó'], [/{\'r}/g, 'ŕ'], [/{\'s}/g, 'ś'], [/{\'u}/g, 'ú'], [/{\'w}/g, 'ẃ'], [/{\'y}/g, 'ý'], [/{\'z}/g, 'ź'], [/{\'{A}}/g, 'Á'], [/{\'{C}}/g, 'Ć'], [/{\'{E}}/g, 'É'], [/{\'{G}}/g, 'Ǵ'], [/{\'{I}}/g, 'Í'], [/{\'{N}}/g, 'Ń'], [/{\'{O}}/g, 'Ó'], [/{\'{R}}/g, 'Ŕ'], [/{\'{S}}/g, 'Ś'], [/{\'{U}}/g, 'Ú'], [/{\'{W}}/g, 'Ẃ'], [/{\'{Y}}/g, 'Ý'], [/{\'{Z}}/g, 'Ź'], [/{\'{\A}}/g, 'Á'],[/{\'{\C}}/g, 'Ć'], [/{\'{\E}}/g, 'É'], [/{\'{\G}}/g, 'Ǵ'], [/{\'{\I}}/g, 'Í'], [/{\'{\N}}/g, 'Ń'], [/{\'{\O}}/g, 'Ó'],[/{\'{\R}}/g, 'Ŕ'], [/{\'{\S}}/g, 'Ś'], [/{\'{\U}}/g, 'Ú'], [/{\'{\W}}/g, 'Ẃ'], [/{\'{\Y}}/g, 'Ý'], [/{\'{\Z}}/g, 'Ź'],[/{\' A}/g, 'Á'], [/{\' C}/g, 'Ć'], [/{\' E}/g, 'É'], [/{\' G}/g, 'Ǵ'], [/{\' I}/g, 'Í'], [/{\' N}/g, 'Ń'],[/{\' O}/g, 'Ó'], [/{\' R}/g, 'Ŕ'], [/{\' S}/g, 'Ś'], [/{\' U}/g, 'Ú'], [/{\' W}/g, 'Ẃ'], [/{\' Y}/g, 'Ý'],[/{\' Z}/g, 'Ź'], [/{\'A}/g, 'Á'], [/{\'C}/g, 'Ć'], [/{\'E}/g, 'É'], [/{\'G}/g, 'Ǵ'], [/{\'I}/g, 'Í'],[/{\'N}/g, 'Ń'], [/{\'O}/g, 'Ó'], [/{\'R}/g, 'Ŕ'], [/{\'S}/g, 'Ś'], [/{\'U}/g, 'Ú'], [/{\'W}/g, 'Ẃ'],[/{\'Y}/g, 'Ý'], 
            [/{\'Z}/g, 'Ź'],[/{\'O}/g, 'Ó'], [/{\'R}/g, 'Ŕ'], [/{\'S}/g, 'Ś'], [/{\'U}/g, 'Ú'], [/{\'W}/g, 'Ẃ'], [/{\'Y}/g, 'Ý'], [/{\'Z}/g, 'Ź'],[/\'{a}/g, 'á'], [/\'{c}/g, 'ć'], [/\'{e}/g, 'é'], [/\'{g}/g, 'ǵ'], [/\'{i}/g, 'í'], [/\'{n}/g, 'ń'], [/\'{o}/g, 'ó'],[/\'{r}/g, 'ŕ'], [/\'{s}/g, 'ś'], [/\'{u}/g, 'ú'], [/\'{w}/g, 'ẃ'], [/\'{y}/g, 'ý'], [/\'{z}/g, 'ź'], [/\'a/g, 'á'],[/\'c/g, 'ć'], [/\'e/g, 'é'], [/\'g/g, 'ǵ'], [/\'i/g, 'í'], [/\'n/g, 'ń'], [/\'o/g, 'ó'], [/\'r/g, 'ŕ'], [/\'s/g, 'ś'],[/\'u/g, 'ú'], [/\'w/g, 'ẃ'], [/\'y/g, 'ý'], [/\'z/g, 'ź'], [/\'{\a}/g, 'á'], [/\'{\c}/g, 'ć'], [/\'{\e}/g, 'é'],[/\'{\g}/g, 'ǵ'], [/\'{\i}/g, 'í'], [/\'{\n}/g, 'ń'], [/\'{\o}/g, 'ó'], [/\'{\r}/g, 'ŕ'], [/\'{\s}/g, 'ś'], [/\'{\u}/g, 'ú'],[/\'{\w}/g, 'ẃ'], [/\'{\y}/g, 'ý'], [/\'{\z}/g, 'ź'], [/\'{A}/g, 'Á'], [/\'{C}/g, 'Ć'], [/\'{E}/g, 'É'], [/\'{G}/g, 'Ǵ'],[/\'{I}/g, 'Í'], [/\'{N}/g, 'Ń'], [/\'{O}/g, 'Ó'], [/\'{R}/g, 'Ŕ'], [/\'{S}/g, 'Ś'], [/\'{U}/g, 'Ú'], [/\'{W}/g, 'Ẃ'],[/\'{Y}/g, 'Ý'], [/\'{Z}/g, 'Ź'], [/\'A/g, 'Á'], [/\'C/g, 'Ć'], [/\'E/g, 'É'], [/\'G/g, 'Ǵ'], [/\'I/g, 'Í'], [/\'N/g, 'Ń'],[/\'O/g, 'Ó'], [/\'R/g, 'Ŕ'], [/\'S/g, 'Ś'], [/\'U/g, 'Ú'], [/\'W/g, 'Ẃ'], [/\'Y/g, 'Ý'], [/\'Z/g, 'Ź'], [/\'{\A}/g, 'Á'],[/\'{\C}/g, 'Ć'], [/\'{\E}/g, 'É'], [/\'{\G}/g, 'Ǵ'], [/\'{\I}/g, 'Í'], [/\'{\N}/g, 'Ń'], [/\'{\O}/g, 'Ó'], [/\'{\R}/g, 'Ŕ'],[/\'{\S}/g, 'Ś'], [/\'{\U}/g, 'Ú'], [/\'{\W}/g, 'Ẃ'], [/\'{\Y}/g, 'Ý'], [/\'{\Z}/g, 'Ź'], [/{\`{a}}/g, 'à'], [/{\`{e}}/g, 'è'],[/{\`{i}}/g, 'ì'], [/{\`{o}}/g, 'ò'], [/{\`{u}}/g, 'ù'], [/{\`{\a}}/g, 'à'], [/{\`{\e}}/g, 'è'], [/{\`{\i}}/g, 'ì'],[/{\`{\o}}/g, 'ò'], [/{\`{\u}}/g, 'ù'], [/{\` a}/g, 'à'], [/{\` e}/g, 'è'], [/{\` i}/g, 'ì'], [/{\` o}/g, 'ò'], [/{\` u}/g, 'ù'],[/{\`a}/g, 'à'], [/{\`e}/g, 'è'], [/{\`i}/g, 'ì'], [/{\`o}/g, 'ò'], [/{\`u}/g, 'ù'],[/{\`{A}}/g, 'À'], [/{\`{E}}/g, 'È'], [/{\`{I}}/g, 'Ì'], [/{\`{O}}/g, 'Ò'], [/{\`{U}}/g, 'Ù'],[/{\`{\a}}/g, 'À'], [/{\`{\e}}/g, 'È'], [/{\`{\I}}/g, 'Ì'], [/{\`{\O}}/g, 'Ò'], [/{\`{\U}}/g, 'Ù'],[/{\` A}/g, 'À'], [/{\` E}/g, 'È'], [/{\` I}/g, 'Ì'], [/{\` O}/g, 'Ò'], [/{\` U}/g, 'Ù'],[/{\`A}/g, 'À'], [/{\`E}/g, 'È'], [/{\`I}/g, 'Ì'], [/{\`O}/g, 'Ò'], [/{\`U}/g, 'Ù'],[/\\`{a}/g, 'à'], [/\\`{e}/g, 'è'], [/\\`{i}/g, 'ì'], [/\\`{o}/g, 'ò'], [/\\`{u}/g, 'ù'],[/\\`a/g, 'à'], [/\\`e/g, 'è'], [/\\`i/g, 'ì'], [/\\`o/g, 'ò'], [/\\`u/g, 'ù'],[/\\`{\a}/g, 'à'], [/\\`{\e}/g, 'è'], [/\\`{\i}/g, 'ì'], [/\\`{\o}/g, 'ò'], [/\\`{\u}/g, 'ù'],
            [/\\`{A}/g, 'À'], [/\\`{E}/g, 'È'], [/\\`{I}/g, 'Ì'], [/\\`{O}/g, 'Ò'], [/\\`{U}/g, 'Ù'],[/\\`A/g, 'À'], [/\\`E/g, 'È'], [/\\`I/g, 'Ì'], [/\\`O/g, 'Ò'], [/\\`U/g, 'Ù'],[/\\`{\a}/g, 'À'], [/\\`{\e}/g, 'È'], [/\\`{\I}/g, 'Ì'], [/\\`{\O}/g, 'Ò'], [/\\`{\U}/g, 'Ù'],[/{\^a}/g, 'â'], [/{\^c}/g, 'ĉ'], [/{\^e}/g, 'ê'], [/{\^g}/g, 'ĝ'], [/{\^i}/g, 'î'], [/{\^j}/g, 'ĵ'],[/{\^o}/g, 'ô'], [/{\^s}/g, 'ŝ'], [/{\^u}/g, 'û'], [/{\^{\a}}/g, 'â'], [/{\^{\c}}/g, 'ĉ'], [/{\^{\e}}/g, 'ê'],[/{\^{\g}}/g, 'ĝ'], [/{\^{\i}}/g, 'î'], [/{\^{\j}}/g, 'ĵ'], [/{\^{\o}}/g, 'ô'], [/{\^{\s}}/g, 'ŝ'], [/{\^{\u}}/g, 'û'],[/{\^ a}/g, 'â'], [/{\^ c}/g, 'ĉ'], [/{\^ e}/g, 'ê'], [/{\^ g}/g, 'ĝ'], [/{\^ i}/g, 'î'], [/{\^ j}/g, 'ĵ'],[/{\^ o}/g, 'ô'], [/{\^ s}/g, 'ŝ'], [/{\^ u}/g, 'û'], [/{\^a}/g, 'â'], [/{\^c}/g, 'ĉ'], [/{\^e}/g, 'ê'],[/{\^g}/g, 'ĝ'], [/{\^i}/g, 'î'], [/{\^j}/g, 'ĵ'], [/{\^o}/g, 'ô'], [/{\^s}/g, 'ŝ'], [/{\^u}/g, 'û'],[/{\^{A}}/g, 'Â'], [/{\^{C}}/g, 'Ĉ'], [/{\^{E}}/g, 'Ê'], [/{\^{G}}/g, 'Ĝ'], [/{\^{I}}/g, 'Î'], [/{\^{J}}/g, 'Ĵ'],[/{\^{O}}/g, 'Ô'], [/{\^{S}}/g, 'Ŝ'], [/{\^{U}}/g, 'Û'],[/{\^{\a}}/g, 'Â'], [/{\^{\c}}/g, 'Ĉ'], [/{\^{\e}}/g, 'Ê'], [/{\^{\G}}/g, 'Ĝ'], [/{\^{\I}}/g, 'Î'], [/{\^{\J}}/g, 'Ĵ'],[/{\^{\O}}/g, 'Ô'], [/{\^{\S}}/g, 'Ŝ'], [/{\^{\U}}/g, 'Û'], [/{\^ A}/g, 'Â'], [/{\^ C}/g, 'Ĉ'], [/{\^ E}/g, 'Ê'],[/{\^ G}/g, 'Ĝ'], [/{\^ I}/g, 'Î'], [/{\^ J}/g, 'Ĵ'], [/{\^ O}/g, 'Ô'], [/{\^ S}/g, 'Ŝ'], [/{\^ U}/g, 'Û'],[/{\^A}/g, 'Â'], [/{\^C}/g, 'Ĉ'], [/{\^E}/g, 'Ê'], [/{\^G}/g, 'Ĝ'], [/{\^I}/g, 'Î'], [/{\^J}/g, 'Ĵ'], [/{\^O}/g, 'Ô'],[/{\^S}/g, 'Ŝ'], [/{\^U}/g, 'Û'], [/\\^{a}/g, 'â'], [/\\^{c}/g, 'ĉ'], [/\\^{e}/g, 'ê'], [/\\^{g}/g, 'ĝ'], [/\\^{i}/g, 'î'],[/\\^{j}/g, 'ĵ'], [/\\^{o}/g, 'ô'], [/\\^{s}/g, 'ŝ'], [/\\^{u}/g, 'û'], [/\\^a/g, 'â'], [/\\^c/g, 'ĉ'], [/\\^e/g, 'ê'],[/\\^g/g, 'ĝ'], [/\\^i/g, 'î'], [/\\^j/g, 'ĵ'], [/\\^o/g, 'ô'], [/\\^s/g, 'ŝ'], [/\\^u/g, 'û'], [/\\^{\a}/g, 'â'],[/\\^{\c}/g, 'ĉ'], [/\\^{\e}/g, 'ê'], [/\\^{\g}/g, 'ĝ'], [/\\^{\i}/g, 'î'], [/\\^{\j}/g, 'ĵ'], [/\\^{\o}/g, 'ô'],[/\\^{\s}/g, 'ŝ'], [/\\^{\u}/g, 'û'], [/\\^{A}/g, 'Â'], [/\\^{C}/g, 'Ĉ'], [/\\^{E}/g, 'Ê'], [/\\^{G}/g, 'Ĝ'],[/\\^{I}/g, 'Î'], [/\\^{J}/g, 'Ĵ'], [/\\^{O}/g, 'Ô'], [/\\^{S}/g, 'Ŝ'], [/\\^{U}/g, 'Û'], [/\\^A/g, 'Â'], [/\\^C/g, 'Ĉ'],[/\\^E/g, 'Ê'], [/\\^G/g, 'Ĝ'], [/\\^I/g, 'Î'], [/\\^J/g, 'Ĵ'], [/\\^O/g, 'Ô'], [/\\^S/g, 'Ŝ'], [/\\^U/g, 'Û'],[/\\^{\a}/g, 'Â'], [/\\^{\c}/g, 'Ĉ'], [/\\^{\e}/g, 'Ê'], [/\\^{\G}/g, 'Ĝ'], [/\\^{\I}/g, 'Î'], [/\\^{\J}/g, 'Ĵ'],
            [/\\^{\O}/g, 'Ô'], [/\\^{\S}/g, 'Ŝ'], [/\\^{\U}/g, 'Û'], [/{\\"{a}}/g, 'ä'], [/{\\"{e}}/g, 'ë'], [/{\\"{i}}/g, 'ï'],[/{\\"{o}}/g, 'ö'], [/{\\"{u}}/g, 'ü'], [/{\\"{\a}}/g, 'ä'], [/{\\"{\e}}/g, 'ë'], [/{\\"{\i}}/g, 'ï'], [/{\\"{\o}}/g, 'ö'],[/{\\"{\u}}/g, 'ü'], [/{\\" a}/g, 'ä'], [/{\\" e}/g, 'ë'], [/{\\" i}/g, 'ï'], [/{\\" o}/g, 'ö'], [/{\\" u}/g, 'ü'],[/{\\"a}/g, 'ä'], [/{\\"e}/g, 'ë'], [/{\\"i}/g, 'ï'],[/{\\"o}/g, 'ö'], [/{\\"u}/g, 'ü'], [/{\\"{A}}/g, 'Ä'], [/{\\"{E}}/g, 'Ë'], [/{\\"{I}}/g, 'Ï'], [/{\\"{O}}/g, 'Ö'], [/{\\"{U}}/g, 'Ü'],[/{\\"{\a}}/g, 'Ä'], [/{\\"{\e}}/g, 'Ë'], [/{\\"{\I}}/g, 'Ï'], [/{\\"{\O}}/g, 'Ö'], [/{\\"{\U}}/g, 'Ü'], [/{\\" A}/g, 'Ä'], [/{\\" E}/g, 'Ë'],[/{\\" I}/g, 'Ï'], [/{\\" O}/g, 'Ö'], [/{\\" U}/g, 'Ü'], [/{\\"A}/g, 'Ä'], [/{\\"E}/g, 'Ë'], [/{\\"I}/g, 'Ï'], [/{\\"O}/g, 'Ö'], [/{\\"U}/g, 'Ü'],[/\\\"{a}/g, 'ä'], [/\\\"{e}/g, 'ë'], [/\\\"{i}/g, 'ï'], [/\\\"{o}/g, 'ö'], [/\\\"{u}/g, 'ü'], [/\\\"a/g, 'ä'], [/\\\"e/g, 'ë'], [/\\\"i/g, 'ï'],[/\\\"o/g, 'ö'], [/\\\"u/g, 'ü'], [/\\\"{\a}/g, 'ä'], [/\\\"{\e}/g, 'ë'], [/\\\"{\i}/g, 'ï'], [/\\\"{\o}/g, 'ö'], [/\\\"{\u}/g, 'ü'],[/\\\"{A}/g, 'Ä'], [/\\\"{E}/g, 'Ë'], [/\\\"{I}/g, 'Ï'], [/\\\"{O}/g, 'Ö'], [/\\\"{U}/g, 'Ü'], [/\\\"A/g, 'Ä'], [/\\\"E/g, 'Ë'], [/\\\"I/g, 'Ï'],[/\\\"O/g, 'Ö'], [/\\\"U/g, 'Ü'], [/\\\"{\a}/g, 'Ä'], [/\\\"{\e}/g, 'Ë'], [/\\\"{\I}/g, 'Ï'], [/\\\"{\O}/g, 'Ö'], [/\\\"{\U}/g, 'Ü'],[/{\\={a}}/g, 'ā'], [/{\\={e}}/g, 'ē'], [/{\\={i}}/g, 'ī'], [/{\\={o}}/g, 'ō'], [/{\\={u}}/g, 'ū'], [/{\\={\a}}/g, 'ā'], [/{\\={\e}}/g, 'ē'],[/{\\={\i}}/g, 'ī'], [/{\\={\o}}/g, 'ō'], [/{\\={\u}}/g, 'ū'], [/{\\= a}/g, 'ā'], [/{\\= e}/g, 'ē'], [/{\\= i}/g, 'ī'], [/{\\= o}/g, 'ō'],[/{\\= u}/g, 'ū'], [/{\\=a}/g, 'ā'], [/{\\=e}/g, 'ē'], [/{\\=i}/g, 'ī'], [/{\\=o}/g, 'ō'], [/{\\=u}/g, 'ū'], [/{\\={A}}/g, 'Ā'], [/{\\={E}}/g, 'Ē'],[/{\\={I}}/g, 'Ī'], [/{\\={O}}/g, 'Ō'], [/{\\={U}}/g, 'Ū'], [/{\\={\a}}/g, 'Ā'], [/{\\={\e}}/g, 'Ē'], [/{\\={\I}}/g, 'Ī'], [/{\\={\O}}/g, 'Ō'],[/{\\={\U}}/g, 'Ū'], [/{\\= A}/g, 'Ā'], [/{\\= E}/g, 'Ē'], [/{\\= I}/g, 'Ī'], [/{\\= O}/g, 'Ō'], [/{\\= U}/g, 'Ū'], [/{\\=A}/g, 'Ā'],[/{\\=E}/g, 'Ē'], [/{\\=I}/g, 'Ī'], [/{\\=O}/g, 'Ō'], [/{\\=U}/g, 'Ū'], [/\\={a}/g, 'ā'], [/\\={e}/g, 'ē'], [/\\={i}/g, 'ī'], [/\\={o}/g, 'ō'],[/\\={u}/g, 'ū'], [/\\=a/g, 'ā'], [/\\=e/g, 'ē'], [/\\=i/g, 'ī'], [/\\=o/g, 'ō'], [/\\=u/g, 'ū'],[/\\=u/g, 'ū'], [/\\={\a}/g, 'ā'], [/\\={\e}/g, 'ē'], [/\\={\i}/g, 'ī'], [/\\={\o}/g, 'ō'], [/\\={\u}/g, 'ū'],
            [/\\={A}/g, 'Ā'], [/\\={E}/g, 'Ē'], [/\\={I}/g, 'Ī'], [/\\={O}/g, 'Ō'], [/\\={U}/g, 'Ū'], [/\\=A/g, 'Ā'], [/\\=E/g, 'Ē'],[/\\=I/g, 'Ī'], [/\\=O/g, 'Ō'], [/\\=U/g, 'Ū'], [/\\={\a}/g, 'Ā'], [/\\={\e}/g, 'Ē'], [/\\={\I}/g, 'Ī'], [/\\={\O}/g, 'Ō'],[/\\={\U}/g, 'Ū'], [/{\\.{c}}/g, 'ċ'], [/{\\.{e}}/g, 'ė'], [/{\\.{g}}/g, 'ġ'], [/{\\.{o}}/g, 'ȯ'],[/{\\.{z}}/g, 'ż'], [/{\\.{\c}}/g, 'ċ'], [/{\\.{\e}}/g, 'ė'], [/{\\.{\g}}/g, 'ġ'], [/{\\.{\o}}/g, 'ȯ'],[/{\\.{\z}}/g, 'ż'], [/{\\. c}/g, 'ċ'], [/{\\. e}/g, 'ė'], [/{\\. g}/g, 'ġ'], [/{\\. o}/g, 'ȯ'],[/{\\. z}/g, 'ż'], [/{\\.c}/g, 'ċ'], [/{\\.e}/g, 'ė'], [/{\\.g}/g, 'ġ'], [/{\\.o}/g, 'ȯ'], [/{\\.z}/g, 'ż'],[/{\\.{A}}/g, 'Ȧ'], [/{\\.{C}}/g, 'Ċ'], [/{\\.{E}}/g, 'Ė'], [/{\\.{G}}/g, 'Ġ'], [/{\\.{O}}/g, 'Ȯ'], [/{\\.{Z}}/g, 'Ż'],[/{\\.{\a}}/g, 'Ȧ'], [/{\\.{\c}}/g, 'Ċ'], [/{\\.{\e}}/g, 'Ė'], [/{\\.{\G}}/g, 'Ġ'], [/{\\.{\O}}/g, 'Ȯ'], [/{\\.{\Z}}/g, 'Ż'],[/{\\. A}/g, 'Ȧ'], [/{\\. C}/g, 'Ċ'], [/{\\. E}/g, 'Ė'], [/{\\. G}/g, 'Ġ'], [/{\\. O}/g, 'Ȯ'], [/{\\. Z}/g, 'Ż'],[/{\\.A}/g, 'Ȧ'], [/{\\.C}/g, 'Ċ'], [/{\\.E}/g, 'Ė'], [/{\\.G}/g, 'Ġ'], [/{\\.O}/g, 'Ȯ'], [/{\\.Z}/g, 'Ż'],[/\\.{c}/g, 'ċ'], [/\\.{e}/g, 'ė'], [/\\.{g}/g, 'ġ'], [/\\.{o}/g, 'ȯ'], [/\\.{z}/g, 'ż'], [/\\.c/g, 'ċ'],[/\\.e/g, 'ė'], [/\\.g/g, 'ġ'], [/\\.o/g, 'ȯ'], [/\\.z/g, 'ż'], [/\\.{\c}/g, 'ċ'], [/\\.{\e}/g, 'ė'],[/\\.{\g}/g, 'ġ'], [/\\.{\o}/g, 'ȯ'], [/\\.{\z}/g, 'ż'], [/\\.{A}/g, 'Ȧ'], [/\\.{C}/g, 'Ċ'], [/\\.{E}/g, 'Ė'], [/\\.{G}/g, 'Ġ'],[/\\.{O}/g, 'Ȯ'], [/\\.{Z}/g, 'Ż'], [/\\.A/g, 'Ȧ'], [/\\.C/g, 'Ċ'], [/\\.E/g, 'Ė'], [/\\.G/g, 'Ġ'], [/\\.O/g, 'Ȯ'], [/\\.Z/g, 'Ż'],[/\\.{\a}/g, 'Ȧ'], [/\\.{\c}/g, 'Ċ'], [/\\.{\e}/g, 'Ė'], [/\\.{\G}/g, 'Ġ'], [/\\.{\O}/g, 'Ȯ'], [/\\.{\Z}/g, 'Ż'],[/{\\d{a}}/g, 'ạ'], [/{\\d{e}}/g, 'ẹ'], [/{\\d{h}}/g, 'ḥ'], [/{\\d{i}}/g, 'ị'], [/{\\d{m}}/g, 'ṃ'], [/{\\d{n}}/g, 'ṇ'],[/{\\d{o}}/g, 'ọ'], [/{\\d{r}}/g, 'ṛ'], [/{\\d{s}}/g, 'ṣ'], [/{\\d{u}}/g, 'ụ'], [/{\\d{\a}}/g, 'ạ'], [/{\\d{\e}}/g, 'ẹ'],[/{\\d{\h}}/g, 'ḥ'], [/{\\d{\i}}/g, 'ị'], [/{\\d{\m}}/g, 'ṃ'], [/{\\d{\n}}/g, 'ṇ'], [/{\\d{\o}}/g, 'ọ'], [/{\\d{\r}}/g, 'ṛ'],[/{\\d{\s}}/g, 'ṣ'], [/{\\d{\u}}/g, 'ụ'], [/{\\d a}/g, 'ạ'], [/{\\d e}/g, 'ẹ'], [/{\\d h}/g, 'ḥ'], [/{\\d i}/g, 'ị'],
            [/{\\d m}/g, 'ṃ'], [/{\\d n}/g, 'ṇ'], [/{\\d o}/g, 'ọ'], [/{\\d r}/g, 'ṛ'], [/{\\d s}/g, 'ṣ'], [/{\\d u}/g, 'ụ'],[/{\\da}/g, 'ạ'], [/{\\de}/g, 'ẹ'], [/{\\dh}/g, 'ḥ'], [/{\\di}/g, 'ị'], [/{\\dm}/g, 'ṃ'], [/{\\dn}/g, 'ṇ'], [/{\\do}/g, 'ọ'],[/{\\dr}/g, 'ṛ'], [/{\\ds}/g, 'ṣ'], [/{\\du}/g, 'ụ'], [/{\\d{A}}/g, 'Ạ'], [/{\\d{E}}/g, 'Ẹ'], [/{\\d{H}}/g, 'Ḥ'],[/{\\d{I}}/g, 'Ị'], [/{\\d{M}}/g, 'Ṃ'], [/{\\d{N}}/g, 'Ṇ'], [/{\\d{O}}/g, 'Ọ'], [/{\\d{R}}/g, 'Ṛ'], [/{\\d{S}}/g, 'Ṣ'],[/{\\d{U}}/g, 'Ụ'], [/{\\d{\a}}/g, 'Ạ'], [/{\\d{\e}}/g, 'Ẹ'], [/{\\d{\H}}/g, 'Ḥ'], [/{\\d{\I}}/g, 'Ị'], [/{\\d{\M}}/g, 'Ṃ'],[/{\\d{\n}}/g, 'Ṇ'], [/{\\d{\O}}/g, 'Ọ'], [/{\\d{\r}}/g, 'Ṛ'], [/{\\d{\S}}/g, 'Ṣ'], [/{\\d{\U}}/g, 'Ụ'], [/{\\d A}/g, 'Ạ'],[/{\\d E}/g, 'Ẹ'], [/{\\d H}/g, 'Ḥ'], [/{\\d I}/g, 'Ị'], [/{\\d M}/g, 'Ṃ'], [/{\\d N}/g, 'Ṇ'], [/{\\d O}/g, 'Ọ'],[/{\\d R}/g, 'Ṛ'], [/{\\d S}/g, 'Ṣ'], [/{\\d U}/g, 'Ụ'], [/{\\dA}/g, 'Ạ'], [/{\\dE}/g, 'Ẹ'], [/{\\dH}/g, 'Ḥ'], [/{\\dI}/g, 'Ị'],[/{\\dM}/g, 'Ṃ'], [/{\\dN}/g, 'Ṇ'], [/{\\dO}/g, 'Ọ'], [/{\\dR}/g, 'Ṛ'], [/{\\dS}/g, 'Ṣ'], [/{\\dU}/g, 'Ụ'], [/\\d{a}/g, 'ạ'],[/\\d{e}/g, 'ẹ'], [/\\d{h}/g, 'ḥ'], [/\\d{i}/g, 'ị'], [/\\d{m}/g, 'ṃ'], [/\\d{n}/g, 'ṇ'], [/\\d{o}/g, 'ọ'], [/\\d{r}/g, 'ṛ'],[/\\d{s}/g, 'ṣ'], [/\\d{u}/g, 'ụ'], [/\\da/g, 'ạ'], [/\\de/g, 'ẹ'], [/\\dh/g, 'ḥ'], [/\\di/g, 'ị'], [/\\dm/g, 'ṃ'],[/\\dn/g, 'ṇ'], [/\\do/g, 'ọ'], [/\\dr/g, 'ṛ'], [/\\ds/g, 'ṣ'], [/\\du/g, 'ụ'], [/\\d{\a}/g, 'ạ'], [/\\d{\e}/g, 'ẹ'],[/\\d{\h}/g, 'ḥ'], [/\\d{\i}/g, 'ị'], [/\\d{\m}/g, 'ṃ'], [/\\d{\n}/g, 'ṇ'], [/\\d{\o}/g, 'ọ'], [/\\d{\r}/g, 'ṛ'],[/\\d{\s}/g, 'ṣ'], [/\\d{\u}/g, 'ụ'], [/\\d{A}/g, 'Ạ'], [/\\d{E}/g, 'Ẹ'], [/\\d{H}/g, 'Ḥ'], [/\\d{I}/g, 'Ị'],[/\\d{M}/g, 'Ṃ'], [/\\d{N}/g, 'Ṇ'], [/\\d{O}/g, 'Ọ'], [/\\d{R}/g, 'Ṛ'], [/\\d{S}/g, 'Ṣ'], [/\\d{U}/g, 'Ụ'],[/\\dA/g, 'Ạ'], [/\\dE/g, 'Ẹ'], [/\\dH/g, 'Ḥ'], [/\\dI/g, 'Ị'], [/\\dM/g, 'Ṃ'], [/\\dN/g, 'Ṇ'], [/\\dO/g, 'Ọ'],
            [/\\dR/g, 'Ṛ'], [/\\dS/g, 'Ṣ'], [/\\dU/g, 'Ụ'], [/\\d{\a}/g, 'Ạ'], [/\\d{\e}/g, 'Ẹ'], [/\\d{\H}/g, 'Ḥ'],[/\\d{\I}/g, 'Ị'], [/\\d{\M}/g, 'Ṃ'], [/\\d{\n}/g, 'Ṇ'], [/\\d{\O}/g, 'Ọ'], [/\\d{\r}/g, 'Ṛ'], [/\\d{\S}/g, 'Ṣ'],[/\\d{\U}/g, 'Ụ'], [/{\\u{a}}/g, 'ă'], [/{\\u{e}}/g, 'ĕ'], [/{\\u{g}}/g, 'ğ'], [/{\\u{i}}/g, 'ĭ'], [/{\\u{o}}/g, 'ŏ'],[/{\\u{u}}/g, 'ŭ'], [/{\\u{\a}}/g, 'ă'], [/{\\u{\e}}/g, 'ĕ'], [/{\\u{\g}}/g, 'ğ'], [/{\\u{\i}}/g, 'ĭ'], [/{\\u{\o}}/g, 'ŏ'],[/{\\u{\u}}/g, 'ŭ'], [/{\\u a}/g, 'ă'], [/{\\u e}/g, 'ĕ'], [/{\\u g}/g, 'ğ'], [/{\\u i}/g, 'ĭ'], [/{\\u o}/g, 'ŏ'],[/{\\u u}/g, 'ŭ'], [/{\\ua}/g, 'ă'], [/{\\ue}/g, 'ĕ'], [/{\\ug}/g, 'ğ'], [/{\\ui}/g, 'ĭ'], [/{\\uo}/g, 'ŏ'], [/{\\uu}/g, 'ŭ'],[/{\\u{A}}/g, 'Ă'], [/{\\u{E}}/g, 'Ĕ'], [/{\\u{G}}/g, 'Ğ'], [/{\\u{I}}/g, 'Ĭ'], [/{\\u{O}}/g, 'Ŏ'], [/{\\u{U}}/g, 'Ŭ'],[/{\\u{\a}}/g, 'Ă'], [/{\\u{\e}}/g, 'Ĕ'], [/{\\u{\G}}/g, 'Ğ'], [/{\\u{\I}}/g, 'Ĭ'], [/{\\u{\O}}/g, 'Ŏ'], [/{\\u{\U}}/g, 'Ŭ'],[/{\\u A}/g, 'Ă'], [/{\\u E}/g, 'Ĕ'], [/{\\u G}/g, 'Ğ'], [/{\\u I}/g, 'Ĭ'], [/{\\u O}/g, 'Ŏ'], [/{\\u U}/g, 'Ŭ'],[/{\\uA}/g, 'Ă'], [/{\\uE}/g, 'Ĕ'], [/{\\uG}/g, 'Ğ'], [/{\\uI}/g, 'Ĭ'], [/{\\uO}/g, 'Ŏ'], [/{\\uU}/g, 'Ŭ'], [/\\u{a}/g, 'ă'],[/\\u{e}/g, 'ĕ'], [/\\u{g}/g, 'ğ'], [/\\u{i}/g, 'ĭ'], [/\\u{o}/g, 'ŏ'], [/\\u{u}/g, 'ŭ'],[/\\ua/g, 'ă'], [/\\ue/g, 'ĕ'], [/\\ug/g, 'ğ'], [/\\ui/g, 'ĭ'], [/\\uo/g, 'ŏ'], [/\\uu/g, 'ŭ'], [/\\u{\a}/g, 'ă'],[/\\u{\e}/g, 'ĕ'], [/\\u{\g}/g, 'ğ'], [/\\u{\i}/g, 'ĭ'], [/\\u{\o}/g, 'ŏ'], [/\\u{\u}/g, 'ŭ'], [/\\u{A}/g, 'Ă'],[/\\u{E}/g, 'Ĕ'], [/\\u{G}/g, 'Ğ'], [/\\u{I}/g, 'Ĭ'], [/\\u{O}/g, 'Ŏ'], [/\\u{U}/g, 'Ŭ'], [/\\uA/g, 'Ă'],[/\\uE/g, 'Ĕ'], [/\\uG/g, 'Ğ'], [/\\uI/g, 'Ĭ'], [/\\uO/g, 'Ŏ'], [/\\uU/g, 'Ŭ'], [/\\u{\a}/g, 'Ă'], [/\\u{\e}/g, 'Ĕ'],[/\\u{\G}/g, 'Ğ'], [/\\u{\I}/g, 'Ĭ'], [/\\u{\O}/g, 'Ŏ'], [/\\u{\U}/g, 'Ŭ'], [/{\\H{o}}/g, 'ő'], [/{\\H{u}}/g, 'ű'], [/{\\H{\o}}/g, 'ő'], [/{\\H{\u}}/g, 'ű'], [/{\\H o}/g, 'ő'], [/{\\H u}/g, 'ű'], [/{\\Ho}/g, 'ő'], [/{\\Hu}/g, 'ű'],
            [/{\\H{O}}/g, 'Ő'], [/{\\H{U}}/g, 'Ű'], [/{\\H{\O}}/g, 'Ő'], [/{\\H{\U}}/g, 'Ű'], [/{\\H O}/g, 'Ő'], [/{\\H U}/g, 'Ű'], [/{\\HO}/g, 'Ő'], [/{\\HU}/g, 'Ű'], [/\\H{o}/g, 'ő'], [/\\H{u}/g, 'ű'], [/\\Ho/g, 'ő'], [/\\Hu/g, 'ű'], [/\\H{\o}/g, 'ő'], [/\\H{\u}/g, 'ű'], [/\\H{O}/g, 'Ő'], [/\\H{U}/g, 'Ű'], [/\\HO/g, 'Ő'], [/\\HU/g, 'Ű'], [/\\H{\O}/g, 'Ő'], [/\\H{\U}/g, 'Ű'], [/a{\v}/g, 'â'], [/A{\v}/g, 'Â'], [/{\\v{a}}/g, 'ǎ'], [/{\\v{\a}}/g, 'ǎ'], [/{\\v a}/g, 'ǎ'], [/{\\va}/g, 'ǎ'], [/\\v{a}/g, 'ǎ'], [/\\va/g, 'ǎ'], [/\\v{\a}/g, 'ǎ'], [/{\\v{A}}/g, 'Ǎ'], [/{\\v{\a}}/g, 'Ǎ'], [/{\\v A}/g, 'Ǎ'], [/{\\vA}/g, 'Ǎ'], [/\\v{A}/g, 'Ǎ'], [/\\vA/g, 'Ǎ'], [/\\v{\a}/g, 'Ǎ'], [/{\\v{c}}/g, 'č'], [/{\\v{\c}}/g, 'č'], [/{\\v c}/g, 'č'], [/{\\vc}/g, 'č'], [/\\v{c}/g, 'č'], [/\\vc/g, 'č'], [/\\v{\c}/g, 'č'], [/{\\v{C}}/g, 'Č'], [/{\\v{\c}}/g, 'Č'], [/{\\v C}/g, 'Č'], [/{\\vC}/g, 'Č'], [/\\v{C}/g, 'Č'], [/\\vC/g, 'Č'], [/\\v{\c}/g, 'Č'], [/e{\v}/g, 'ê'], [/{\\v{e}}/g, 'ě'], [/{\\v{\e}}/g, 'ě'], [/{\\v e}/g, 'ě'], [/{\\ve}/g, 'ě'], [/\\v{e}/g, 'ě'], [/\\ve/g, 'ě'], [/\\v{\e}/g, 'ě'], [/E{\v}/g, 'Ê'], [/{\\v{E}}/g, 'Ě'], [/{\\v{\e}}/g, 'Ě'], [/{\\v E}/g, 'Ě'], [/{\\vE}/g, 'Ě'], [/\\v{E}/g, 'Ě'], [/\\vE/g, 'Ě'], [/\\v{\e}/g, 'Ě'], [/{\\v{j}}/g, 'ǰ'], [/{\\v{\j}}/g, 'ǰ'], [/{\\v j}/g, 'ǰ'], [/{\\vj}/g, 'ǰ'], [/\\v{j}/g, 'ǰ'], [/\\vj/g, 'ǰ'], [/\\v{\j}/g, 'ǰ'], [/{\\v{r}}/g, 'ř'], [/{\\v{\r}}/g, 'ř'], [/{\\v r}/g, 'ř'], [/{\\vr}/g, 'ř'], [/\\v{r}/g, 'ř'], [/\\vr/g, 'ř'], [/\\v{\r}/g, 'ř'], [/{\\v{R}}/g, 'Ř'], [/{\\v{\r}}/g, 'Ř'], [/{\\v R}}/g, 'Ř'], [/{\\vR}}/g, 'Ř'], [/\\v{R}/g, 'Ř'], [/\\vR/g, 'Ř'], [/\\v{\r}/g, 'Ř'], [/{\\v{s}}/g, 'š'], [/{\\v{\s}}/g, 'š'], [/{\\v s}/g, 'š'], [/{\\vs}/g, 'š'], [/\\v{s}/g, 'š'], [/\\vs/g, 'š'], [/\\v{\s}/g, 'š'], [/{\\v{S}}/g, 'Š'], [/{\\v S}/g, 'Š'], [/{\\vS}/g, 'Š'], [/{\\v{\S}}/g, 'Š'], [/\\v{S}/g, 'Š'], [/\\vS/g, 'Š'], [/\\v{\S}/g, 'Š'], [/{\\v{z}}/g, 'ž'], [/{\\v{\z}}/g, 'ž'], [/{\\v z}/g, 'ž'], [/{\\vz}/g, 'ž'], [/\\v{z}/g, 'ž'], [/\\vz/g, 'ž'], [/\\v{\z}/g, 'ž'], [/{\\v{Z}}/g, 'Ž'], [/{\\v{\Z}}/g, 'Ž'], [/{\\v Z}/g, 'Ž'], [/{\\vZ}/g, 'Ž'], [/\\v{Z}/g, 'Ž'], [/\\vZ/g, 'Ž'], [/\\v{\Z}/g, 'Ž'], [/{\\c{s}}/g, 'ş'], [/{\\c{\s}}/g, 'ş'],
            [/{\\c s}/g, 'ş'], [/\\c{s}/g, 'ş'], [/\\cs/g, 'ş'], [/\\c{\s}/g, 'ş'], [/s{\c}/g, 'ş'], [/s{c}/g, 'ş'], [/{\\c{S}}/g, 'Ş'], [/{\\c{\S}}/g, 'Ş'], [/{\\c S}/g, 'Ş'], [/{\\cS}/g, 'Ş'], [/\\c{S}/g, 'Ş'], [/\\cS/g, 'Ş'], [/\\c{\S}/g, 'Ş'], [/S{\c}/g, 'Ş'], [/S{c}/g, 'Ş'], [/{\\c{e}}/g, 'ȩ'], [/{\\c{\e}}/g, 'ȩ'], [/{\\c e}/g, 'ȩ'], [/{\\ce}/g, 'ȩ'], [/\\c{e}/g, 'ȩ'], [/\\ce/g, 'ȩ'], [/\\c{\e}/g, 'ȩ'], [/e{\c}/g, 'ȩ'], [/e{c}/g, 'ȩ'], [/{\\c{E}}/g, 'Ȩ'], [/{\\c{\e}}/g, 'Ȩ'], [/{\\c E}/g, 'Ȩ'], [/{\\cE}/g, 'Ȩ'], [/\\c{E}/g, 'Ȩ'], [/\\cE/g, 'Ȩ'], [/\\c{\e}/g, 'Ȩ'], [/E{\c}/g, 'Ȩ'], [/E{c}/g, 'Ȩ'], [/{\\c{c}}/g, 'ç'], [/{\\c{\c}}/g, 'ç'], [/{\\c c}/g, 'ç'], [/{\\cc}/g, 'ç'], [/\\c{c}/g, 'ç'], [/\\cc/g, 'ç'], [/\\c{\c}/g, 'ç'], [/c{\c}/g, 'ç'], [/c{c}/g, 'ç'], [/{\\c{C}}/g, 'Ç'], [/{\\c{\c}}/g, 'Ç'], [/{\\c C}/g, 'Ç'], [/{\\cC}/g, 'Ç'], [/\\c{C}/g, 'Ç'], [/\\cC/g, 'Ç'], [/\\c{\c}/g, 'Ç'], [/C{\c}/g, 'Ç'], [/C{c}/g, 'Ç'], [/{\\~{a}}/g, 'ã'], [/{\\~{o}}/g, 'õ'], [/{\\~{\a}}/g, 'ã'], [/{\\~{\o}}/g, 'õ'], [/{\\~ a}/g, 'ã'], [/{\\~ o}/g, 'õ'], [/{\\~a}/g, 'ã'], [/{\\~o}/g, 'õ'], [/{\\~{A}}/g, 'Ã'], [/{\\~{O}}/g, 'Õ'], [/{\\~{\a}}/g, 'Ã'], [/{\\~{\O}}/g, 'Õ'], [/{\\~ A}/g, 'Ã'], [/{\\~ O}/g, 'Õ'], [/{\\~A}/g, 'Ã'], [/{\\~O}/g, 'Õ'], [/\\~{a}/g, 'ã'], [/\\~{o}/g, 'õ'], [/\\~a/g, 'ã'], [/\\~o/g, 'õ'], [/\\~{\a}/g, 'ã'], [/\\~{\o}/g, 'õ'], [/\\~{A}/g, 'Ã'], [/\\~{O}/g, 'Õ'], [/\\~A/g, 'Ã'], [/\\~O/g, 'Õ'], [/\\~{\a}/g, 'Ã'], [/\\~{\O}/g, 'Õ'], [/{\\~{n}}/g, 'ñ'], [/{\\~{\n}}/g, 'ñ'], [/{\\~ n}/g, 'ñ'], [/{\\~n}/g, 'ñ'], [/\\~{n}/g, 'ñ'], [/\\~n/g, 'ñ'], [/\\~{\n}/g, 'ñ'], [/{\\~{N}}/g, 'Ñ'], [/{\\~{\n}}/g, 'Ñ'], [/{\\~ N}/g, 'Ñ'], [/{\\~N}/g, 'Ñ'], [/\\~{N}/g, 'Ñ'], [/\\~N/g, 'Ñ'], [/\\~{\n}/g, 'Ñ'], [/{\\aa}/g, 'å'], [/\\aa/g, 'å'], [/{\\aA}/g, 'Å'], [/\\aA/g, 'Å'], [/{\\r{a}}/g, 'å'], [/{\\r{\a}}/g, 'å'], [/{\\r a}/g, 'å'], [/{\\ra}/g, 'å'], [/\\r{a}/g, 'å'], [/\\ra/g, 'å'], [/\\r{\a}/g, 'å'], [/{\\r{A}}/g, 'Å'], [/{\\r{\a}}/g, 'Å'], [/{\\r A}/g, 'Å'], [/{\\rA}/g, 'Å'], [/\\r{A}/g, 'Å'], [/\\rA/g, 'Å'], [/\\r{\a}/g, 'Å'], [/{\\r{u}}/g, 'ů'], [/{\\r{\u}}/g, 'ů'], [/{\\r u}/g, 'ů'], [/{\\ru}/g, 'ů'], [/\\r{u}/g, 'ů'], [/\\ru/g, 'ů'], [/\\r{\u}/g, 'ů'], [/{\\r{U}}/g, 'Ů'], [/{\\r{\U}}/g, 'Ů'], [/{\\r U}/g, 'Ů'], [/{\\rU}/g, 'Ů'], [/\\r{U}/g, 'Ů'], [/\\rU/g, 'Ů'], [/\\r{\U}/g, 'Ů'], [/{\\ae}/g, 'æ'], [/\\ae/g, 'æ'], [/{\\aE}/g, 'Æ'], [/\\aE/g, 'Æ'], [/{\\oe}/g, 'œ'], [/\\oe/g, 'œ'], [/{\\OE}/g, 'Œ'], [/\\OE/g, 'Œ'], [/{\\o}/g, 'ø'], [/\\o/g, 'ø'], [/\\o{}/g, 'ø'],
            [/{\\O}/g, 'Ø'], [/\\O/g, 'Ø'], [/\\O{}/g, 'Ø'], [/{\\ss}/g, 'ß'], [/\\ss/g, 'ß'], [/{\\l}/g, 'ł'], [/\\l/g, 'ł'], [/{\\L}/g, 'Ł'], [/\\L/g, 'Ł'], [/{\\textquotesingle}/g, "'"], [/\\textquotesingle/g, "'"], [/{\\textendash}/g, '–'], [/\\textendash/g, '–'], [/{\\textemdash}/g, '—'], [/\\textemdash/g, '—'], [/{\\textgreater}/g, '>'], [/\\textgreater/g, '>'], [/{\\textless}/g, '<'], [/\\textless/g, '<'], [/{\\textquoteright}/g, "'"], [/\\textquoteright/g, "'"], [/{\\textquoteleft}/g, "'"], [/\\textquoteleft/g, "'"], [/{\\textquotedblright}/g, '"'], [/\\textquotedblright/g, '"'], [/{\\textquotedblleft}/g, '"'], [/\\textquotedblleft/g, '"']
          ];
        
        // Iterar sobre los reemplazos y aplicar a la cadena
        for (const [pattern, replacement] of replacements) {
            value = value.replace(pattern, replacement);
        }
        
        return value;
    };
      this.bibtexParser = null;
      this.prepare_parser = function(input) {
        if (this.bibtexParser === null) {
          this.bibtexParser = new BibtexParser();
          this.bibtexParser.setInput(input);
          this.bibtexParser.bibtex();
        }
      }
   

      this.formatAuthors = function(authors) {
          const MAX_AUTHORS = 12; // Máximo número de autores a mostrar
          let cleanAuthors = authors.replace(/,/g, ''); // Reemplazar comas dentro de los nombres con espacios
          let authorArray = cleanAuthors.split(' and ').map(author => { // Dividir por ' and ' y limpiar los espacios alrededor
              let words = author.trim().split(' '); // Dividir el autor en palabra
              if (words.length > 1) {
                  // Tomar la primera palabra y la inicial de la segunda palabra con un punto
                  let firstName = words[0]; // Primera palabra
                  let lastNameInitial = words[1].charAt(0).toUpperCase() + '.'; // Inicial con punto
                  return `${firstName} ${lastNameInitial}`; // Formatear
              } else {
                  return words[0]; // Si solo hay un nombre, devolverlo como está
              }
          });
          if (authorArray.length > MAX_AUTHORS) { //  Limitar el número de autores a MAX_AUTHORS
              authorArray = authorArray.slice(0, MAX_AUTHORS); // Tomar solo los primeros MAX_AUTHORS
              authorArray.push('others'); // Añadir "et al." al final
          }
          if (authorArray.length > 1) { // Si hay más de un autor, unirlos con ', ' y el último con ' and '
              return authorArray.slice(0, -1).join(', ') + ' and ' + authorArray[authorArray.length - 1];
          }
          // Si solo hay un autor, retornarlo directamente
          return authorArray[0];
      };

      this.cleanTitle = function(title) { // **
          return title.replace(/^\{+|\}+$/g, '').replace(/\{|\}/g, ''); // Eliminar llaves externas o internas
      };

      this.displayBibtex = function (input, output, constraints) {
        this.prepare_parser(input);
        var old = output.find("*");
        var entries = this.bibtexParser.getEntries();
        for (var entryKey in entries) {
          var entry = entries[entryKey];
          var tpl = $(".bibtex_template").clone().removeClass('bibtex_template');
          var keys = [];
          for (var key in entry) {
            keys.push(key.toUpperCase());
          }
          var removed = false;
          do {
            var conds = tpl.find(".if");
            if (conds.size() == 0) {
              break;
            }
            var cond = conds.first();
            cond.removeClass("if");
            var ifTrue = true;
            var classList = cond.attr('class').split(' ');
            $.each(classList, function (index, cls) {
              if (keys.indexOf(cls.toUpperCase()) < 0) {
                ifTrue = false;
              }
              cond.removeClass(cls);
            });
            if (!ifTrue) {
              cond.remove();
            }
          } while (true);
          tpl.find("div.bibtexdata").attr('id', "bib" + entryKey.replace(/\:/g, ""));
          tpl.find("button.bibtex_but").attr('data-target', "#bib" + entryKey.replace(/\:/g, ""));  
          tpl.find("div.abstractdata").attr('id', "abs" + entryKey.replace(/\:/g, ""));
          tpl.find("button.abstract_but").attr('data-target', "#abs" + entryKey.replace(/\:/g, ""));
          for (var index in keys) {
            var key = keys[index];
            var value = entry[key] || "";
            key = key.toLowerCase();
            if (key === "author") { // *
                value = this.formatAuthors(value); // Formato
                value = this.fixValue(value); // Patrones
            }

            if (key === "title") {
                value = this.cleanTitle(value); // Limpiar llaves del título
                value = this.fixValue(value)
            }
            
            if (key === "journal") {
                value = this.fixValue(value)
          }


            tpl.find("span:not(a)." + key).html(value);
            tpl.find("button:not(a)." + key).attr('data-content', value);
            if (key == "doi") {
              tpl.find("div:not(a)." + key).attr('data-doi', value);
            }
            tpl.find("a." + key).attr('href', value);
          }
          if (constraints == null) {
            output.append(tpl);
          }
          else {
            var approved = true;
            for (var constraint in constraints) {
              var key = constraint;
              var value = constraints[constraint];
              if (key == 'YEAR') {
                if (entry['YEAR'] != value) {
                  approved = false;
                }
              }
              else if (key == 'AUTHOR') {
                var author_found = false;
                if (entry['AUTHOR'].indexOf("and") > -1) {
                  entry['AUTHOR'].split(' and ').forEach(function (item) {
                    item = item.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                    item = author_tex_reformat(item).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                    if (item.indexOf(value) > -1) {
                      author_found = true;
                    }
                  });
                }
                else {
                  item = entry['AUTHOR'].replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                  item = author_tex_reformat(item).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                  if (item.indexOf(value) > -1) {
                    author_found = true;
                  }
                }
                if (author_found == false) {
                  approved = false;
                }
              }
              else if (key == 'PROJECT') {
                if (entry['PROJECT'] != undefined && entry['PROJECT'].indexOf(value) > -1) {
                }
                else {
                  approved = false;
                }
              }
            }
            if (approved == true) {
              output.append(tpl);
            }
          }
          tpl.show();
        }
        old.remove();
      };
    }
  }
  
  function bibtex_js_draw() {
    $(".bibtex_template").hide();
    (new BibtexDisplay()).displayBibtex($("#bibtex_input").val(), $("#bibtex_display"));
  }
  
  // check whether or not jquery is present
  if (typeof jQuery == 'undefined') {
    // an interesting idea is loading jquery here. this might be added
    // in the future.
    alert("Please include jquery in all pages using bibtex_js!");
  } else {
    // draw bibtex when loaded
    $(document).ready(function () {
      // check for template, add default
      if ($(".bibtex_template").size() == 0) {
        $("body").append("<div class=\"bibtex_template\"><div class=\"if author\" style=\"font-weight: bold;\">\n  <span class=\"if year\">\n    <span class=\"year\"></span>, \n  </span>\n  <span class=\"author\"></span>\n  <span class=\"if url\" style=\"margin-left: 20px\">\n    <a class=\"url\" style=\"color:black; font-size:10px\">(view online)</a>\n  </span>\n</div>\n<div style=\"margin-left: 10px; margin-bottom:5px;\">\n  <span class=\"title\"></span>\n</div></div>");
      }
      bibtex_js_draw();
    });
  }
  


 function toggleBibtex(button) {
    console.log("Toggle BibTeX button clicked");
    const container = $(button).closest('.bib-item');
    const bibtexElement = container.find('.bibtexdata');
    bibtexElement.slideToggle();
  }

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    let bibtexDisplay = new BibtexDisplay();
    let bibtexData = document.getElementById('bibtex_input').value;
    console.log("Bibtex data loaded:", bibtexData);

    function initializeBibtex() {
      console.log("Initializing Bibtex display");
      requestAnimationFrame(() => {
        // bibtexData = he.decode(bibtexData); // Decodifica los caracteres escapados en BibTeX
        bibtexDisplay.displayBibtex(bibtexData, $("#bibtex_display"), {});
        addYearsAndProjects();
        updateFilters();
        document.getElementById('content-container').style.display = 'block';
        document.getElementById('loading-spinner').style.display = 'none';
      });
    }

    function addYearsAndProjects() {
      console.log("Adding years and projects");
      let yearSet = new Set();
      let projectSet = new Set();

      // Collect unique years
      $(".year").each(function () {
        let year = $(this).text().trim();
        if (year !== "" && year !== "All Years") {
          yearSet.add(year);
        }
      });
      console.log("Collected years:", Array.from(yearSet));

      // Collect unique projects
      $(".bib-item").each(function () {
        const projectText = $(this).find(".project").text().trim();
        if (projectText) {
          projectText.split(",").forEach(project => {
            let cleanProject = project.trim();
            // Eliminar " Project" si está al final
            if (cleanProject.endsWith(" Project")) {
              cleanProject = cleanProject.slice(0, -8).trim();
            }
            if (cleanProject.toLowerCase() !== "project") {
              projectSet.add(cleanProject);
            }
          });
        }
      });
      console.log("Collected projects:", Array.from(projectSet));

      // Populate year filter
      let yearArray = Array.from(yearSet);
      yearArray = yearArray.filter(year => year !== "Submitted" && year !== "In preparation")
        .sort((a, b) => b - a);
      if (yearSet.has("Submitted")) yearArray.push("Submitted");
      if (yearSet.has("In preparation")) yearArray.push("In preparation");

      yearArray.forEach(year => {
        $('#year-filter').append(`<option value="${year}">${year}</option>`);
      });

      // Populate project filter
      projectSet.forEach(project => {
        $('#project-filter').append(`<option value="${project}">${project}</option>`);
      });
    }


    function updateFilters() {
      console.log("Updating filters");
      const year = document.getElementById('year-filter').value;
      const project = document.getElementById('project-filter').value;
      const items = document.querySelectorAll('.bib-item');
      console.log("Filtering by year:", year, "and project:", project);

      // Show or hide items based on filters
      items.forEach(item => {
        const itemYear = item.querySelector('.year') ? item.querySelector('.year').textContent.trim() : '';
        const itemProjects = item.querySelector('.project') ? item.querySelector('.project').textContent.trim() : '';

        const itemProjectsArray = itemProjects.split(",").map(p => p.trim().replace(/ Project$/, ""));

        const yearMatch = (year === "" || itemYear === year);
        const projectMatch = (project === "" || itemProjectsArray.includes(project));

        item.style.display = (yearMatch && projectMatch) ? 'block' : 'none';
      });

      updateProjectFilter();
    }

    function updateProjectFilter() {
      console.log("Updating project filter");
      const selectedYear = document.getElementById('year-filter').value;
      let projectSet = new Set();

      // Collect projects for the selected year
      $(".bib-item").each(function () {
        const itemYear = $(this).find(".year").text().trim();
        const itemProjects = $(this).find(".project").text().trim();

        if ((selectedYear === "" || itemYear === selectedYear) && itemProjects) {
          itemProjects.split(",").forEach(project => {
            let cleanProject = project.trim();
            // Eliminar " Project" si está al final
            if (cleanProject.endsWith(" Project")) {
              cleanProject = cleanProject.slice(0, -8).trim();  // Elimina " Project"
            }
            if (cleanProject.toLowerCase() !== "project") {
              projectSet.add(cleanProject);
            }
          });
        }
      });

      // Update project filter options
      $('#project-filter').empty();
      $('#project-filter').append('<option value="">All Projects</option>');

      projectSet.forEach(project => {
        $('#project-filter').append(`<option value="${project}">${project}</option>`);
      });

      // Restore current selection
      const selectedProject = document.getElementById('project-filter').value;
      if (selectedProject !== "") {
        document.getElementById('project-filter').value = selectedProject;
      } else {
        document.getElementById('project-filter').value = "";
      }
    }


    // Handle changes in year filter
    document.getElementById('year-filter').addEventListener('change', () => {
      console.log("Year filter changed");
      updateFilters();
      document.getElementById('project-filter').value = "";
    });

    // Handle changes in project filter
    document.getElementById('project-filter').addEventListener('change', () => {
      console.log("Project filter changed");
      const selectedProject = document.getElementById('project-filter').value;
      updateFilters();

      if (selectedProject === "") {
        updateProjectFilter();
        document.getElementById('project-filter').value = "";
      } else {
        document.getElementById('project-filter').value = selectedProject;
      }
    });

    initializeBibtex();
  });
