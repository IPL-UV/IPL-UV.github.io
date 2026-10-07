// Filtros de publicaciones (SSR: la lista ya viene renderizada desde el servidor)
(function () {
  var _bibCache = {};
  function fetchBib(url) {
    if (!_bibCache[url]) _bibCache[url] = fetch(url).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); });
    return _bibCache[url];
  }
  function makePager(cfg) {
    var container = document.getElementById(cfg.containerId);
    var prev = document.getElementById(cfg.prevId);
    var next = document.getElementById(cfg.nextId);
    if (!container || !prev || !next) return null;
    var per = 3, step = 2, start = 0, items = [], counts = {};

    function render() {
      container.innerHTML = '';
      if (cfg.allLabel) {
        var all = document.createElement('button');
        all.className = 'filter-button';
        all.textContent = cfg.allLabel;
        all.addEventListener('click', cfg.onAll);
        container.appendChild(all);
      }
      items.slice(start, start + per).forEach(function (it) {
        var b = document.createElement('button');
        b.className = 'filter-button';
        b.textContent = it + (counts[it] ? ' (' + counts[it] + ')' : '');
        b.addEventListener('click', function () { cfg.onPick(it); });
        container.appendChild(b);
      });
      prev.disabled = start <= 0;
      next.disabled = start + per >= items.length;
    }

    prev.addEventListener('click', function () { start = Math.max(0, start - step); render(); });
    next.addEventListener('click', function () {
      start = Math.min(Math.max(0, items.length - per), start + step);
      render();
    });

    return {
      set: function (it, c) { items = it; counts = c; start = 0; render(); }
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    var items = Array.prototype.slice.call(document.querySelectorAll('.bib-item'));
    if (!items.length) return;

    var curYear = '';
    var curProject = '';

    var data = items.map(function (el) {
      return {
        el: el,
        year: (el.dataset.year || '').replace(/\.$/, ''),
        projects: (el.dataset.project || '').split(',').map(function (p) { return p.trim(); }).filter(Boolean)
      };
    });

    items.forEach(function (el, i) {
      var bib = el.querySelector('.bibtex-toggle');
      if (bib) {
        bib.addEventListener('click', function () {
          var d = el.querySelector('.bibtexdata');
          if (!d) return;
          var open = d.style.display === 'block';
          if (open) {
            d.style.display = 'none';
            bib.setAttribute('aria-expanded', 'false');
            return;
          }
          var show = function () { d.style.display = 'block'; bib.setAttribute('aria-expanded', 'true'); };
          var pre = d.querySelector('.bibtex');
          if (pre && !pre.textContent) {
            var base = (document.getElementById('bibtex_display') || {}).dataset ? document.getElementById('bibtex_display').dataset.bibtexBase : '/bibtex/';
            fetchBib((base || '/bibtex/') + el.dataset.bibfile + '.bib').then(function (text) {
              pre.textContent = text.trim();
              show();
            }).catch(function () { show(); });
          } else {
            show();
          }
        });
      }
      var pbtn = el.querySelector('.project-btn');
      if (pbtn) {
        pbtn.dataset.projects = data[i].projects.join(' - ');
        pbtn.addEventListener('click', function () {
          var expanded = this.dataset.expanded === 'true';
          this.textContent = expanded ? 'Project' : this.dataset.projects;
          this.dataset.expanded = expanded ? 'false' : 'true';
        });
      }
    });

    var yearCount = {};
    var projectCount = {};
    data.forEach(function (d) {
      if (d.year) yearCount[d.year] = (yearCount[d.year] || 0) + 1;
      d.projects.forEach(function (p) { projectCount[p] = (projectCount[p] || 0) + 1; });
    });
    var years = Object.keys(yearCount).sort(function (a, b) {
      if (isNaN(a)) return 1;
      if (isNaN(b)) return -1;
      return b - a;
    });

    var projectPager = makePager({
      containerId: 'project-buttons-container', prevId: 'prev-project-page', nextId: 'next-project-page',
      allLabel: 'All Projects',
      onAll: function () { curProject = ''; updateFilters(); },
      onPick: function (p) { curProject = p; updateFilters(); }
    });

    function updateProjectButtons() {
      var count = {};
      data.forEach(function (d) {
        if (curYear !== '' && d.year !== curYear) return;
        d.projects.forEach(function (p) { count[p] = (count[p] || 0) + 1; });
      });
      var arr = Object.keys(count).sort();
      if (curProject && arr.indexOf(curProject) < 0) curProject = '';
      if (projectPager) projectPager.set(arr, count);
    }

    function updateFilters() {
      data.forEach(function (d) {
        var ok = (curYear === '' || d.year === curYear) &&
                 (curProject === '' || d.projects.indexOf(curProject) >= 0);
        d.el.classList.toggle('hidden', !ok);
      });
      updateProjectButtons();
    }

    var yearPager = makePager({
      containerId: 'year-buttons-container', prevId: 'prev-year-page', nextId: 'next-year-page',
      allLabel: 'All Years',
      onAll: function () { curYear = ''; curProject = ''; updateFilters(); },
      onPick: function (y) { curYear = y; curProject = ''; updateFilters(); }
    });
    if (yearPager) yearPager.set(years, yearCount);

    updateFilters();
  });
})();
