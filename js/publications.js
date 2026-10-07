// Filtros de publicaciones (SSR: la lista ya viene renderizada desde el servidor)
function toggleBibtex(button) {
  var item = button.closest('.bib-item');
  var data = item && item.querySelector('.bibtexdata');
  if (data) data.style.display = (data.style.display === 'block') ? 'none' : 'block';
}

function createPaginatedButtons(opts) {
  var container = document.getElementById(opts.containerId);
  var prev = document.getElementById(opts.prevId);
  var next = document.getElementById(opts.nextId);
  if (!container || !prev || !next) return;
  var per = opts.itemsPerView || 3;
  var step = opts.step || 2;
  var start = 0;

  function render() {
    container.innerHTML = '';
    if (opts.allLabel) {
      var all = document.createElement('button');
      all.className = 'filter-button';
      all.textContent = opts.allLabel;
      all.addEventListener('click', function () { opts.onAllClick(); });
      container.appendChild(all);
    }
    opts.items.slice(start, start + per).forEach(function (it) {
      var b = document.createElement('button');
      b.className = 'filter-button';
      b.textContent = it + (opts.itemCount[it] ? ' (' + opts.itemCount[it] + ')' : '');
      b.addEventListener('click', function () { opts.onClick(it); });
      container.appendChild(b);
    });
    prev.disabled = start <= 0;
    next.disabled = start + per >= opts.items.length;
  }

  prev.addEventListener('click', function () { start = Math.max(0, start - step); render(); });
  next.addEventListener('click', function () {
    start = Math.min(Math.max(0, opts.items.length - per), start + step);
    render();
  });
  render();
}

document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.bib-item');
  if (!items.length) return;

  var curYear = '';
  var curProject = '';

  function text(el) { return el ? el.textContent.trim() : ''; }
  function projectsOf(item) {
    return text(item.querySelector('.project')).split(',')
      .map(function (p) { return p.trim().replace(/ Project$/, ''); })
      .filter(Boolean);
  }
  function yearOf(item) { return text(item.querySelector('.year')).replace(/\.$/, ''); }

  items.forEach(function (item) {
    var btn = item.querySelector('.project-btn');
    if (!btn) return;
    var projects = projectsOf(item).join(' - ');
    btn.addEventListener('click', function () {
      var expanded = this.dataset.expanded === 'true';
      this.textContent = expanded ? 'Project' : projects;
      this.dataset.expanded = expanded ? 'false' : 'true';
    });
  });

  var yearCount = {};
  var projectCount = {};
  items.forEach(function (item) {
    var y = yearOf(item);
    if (y) yearCount[y] = (yearCount[y] || 0) + 1;
    projectsOf(item).forEach(function (p) { projectCount[p] = (projectCount[p] || 0) + 1; });
  });

  var years = Object.keys(yearCount).sort(function (a, b) {
    if (isNaN(a)) return 1;
    if (isNaN(b)) return -1;
    return b - a;
  });

  function buildProjectButtons(arr, count) {
    createPaginatedButtons({
      containerId: 'project-buttons-container', prevId: 'prev-project-page', nextId: 'next-project-page',
      items: arr, itemCount: count,
      onClick: function (p) { curProject = p; updateFilters(); },
      allLabel: 'All Projects', onAllClick: function () { curProject = ''; updateFilters(); }
    });
  }

  function updateProjectButtons() {
    var count = {};
    items.forEach(function (item) {
      if (curYear !== '' && yearOf(item) !== curYear) return;
      projectsOf(item).forEach(function (p) { count[p] = (count[p] || 0) + 1; });
    });
    var arr = Object.keys(count).sort();
    if (curProject && arr.indexOf(curProject) < 0) curProject = '';
    buildProjectButtons(arr, count);
  }

  function updateFilters() {
    items.forEach(function (item) {
      var ok = (curYear === '' || yearOf(item) === curYear) &&
               (curProject === '' || projectsOf(item).indexOf(curProject) >= 0);
      item.style.display = ok ? 'block' : 'none';
    });
    updateProjectButtons();
  }

  createPaginatedButtons({
    containerId: 'year-buttons-container', prevId: 'prev-year-page', nextId: 'next-year-page',
    items: years, itemCount: yearCount,
    onClick: function (y) { curYear = y; curProject = ''; updateFilters(); },
    allLabel: 'All Years', onAllClick: function () { curYear = ''; curProject = ''; updateFilters(); }
  });

  buildProjectButtons(Object.keys(projectCount).sort(), projectCount);
  updateFilters();
});
