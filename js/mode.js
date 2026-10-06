// SEMINARS

function openModal(imageUrl, title, description) {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  var modalCaption = document.getElementById("modalCaption");
  // Convertir el título y descripción de Markdown a HTML usando Marked.js
  var htmlTitle = marked.parse(title);
  var htmlDescription = marked.parse(description);
  modalImage.src = imageUrl;
  // Insertar el título y la descripción convertidos a HTML
  modalCaption.innerHTML = `<strong>${htmlTitle}</strong><br>${htmlDescription}`;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}



function updateFilters() {
  const val = id => document.getElementById(id)?.value ?? "";
  const year = val('year-filter');
  const month = val('month-filter');
  const speaker = val('speaker-filter');
  const items = document.querySelectorAll('.seminar-item');

  // Gather available options based on current filter selection
  const available = {
    'year-filter': new Set(),
    'month-filter': new Set(),
    'speaker-filter': new Set()
  };

  items.forEach(item => {
    const itemYear = item.getAttribute('data-year');
    const itemMonth = item.getAttribute('data-month');
    const itemSpeaker = item.getAttribute('data-speaker');

    const match = (year === "" || itemYear === year)
               && (month === "" || itemMonth === month)
               && (speaker === "" || itemSpeaker === speaker);

    item.style.display = match ? 'flex' : 'none';
    if (match) {
      available['year-filter'].add(itemYear);
      available['month-filter'].add(itemMonth);
      available['speaker-filter'].add(itemSpeaker);
    }
  });

  Object.entries(available).forEach(([id, set]) => {
    const el = document.getElementById(id);
    if (!el) return;
    Array.from(el.options).forEach(option => {
      option.style.display = (option.value === "" || set.has(option.value)) ? 'block' : 'none';
    });
  });
}

// NAVBAR

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.custom-navbar-collapse');
  const currentPath = window.location.pathname;

  toggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
  });

  // Close menu when clicking outside the navbar
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.custom-navbars')) {
      navbarCollapse.classList.remove('show');
    }
  });

  // Highlight active nav item
  const navLinks = document.querySelectorAll('.custom-nav-link');
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    // Add "active" class if path matches and not on the home page
    if (linkPath === currentPath && currentPath !== '/') {
      link.closest('.custom-nav-item').classList.add('active');
    }
  });

  // Highlight active dropdown item
  const dropdownItems = document.querySelectorAll('.custom-dropdown-item');
  dropdownItems.forEach(item => {
    const itemPath = new URL(item.href).pathname;

    // Add "active" class if path matches
    if (itemPath === currentPath) {
      item.classList.add('active');

      // Ensure parent menu is also highlighted
      const parentDropdown = item.closest('.custom-dropdown');
      if (parentDropdown) {
        parentDropdown.classList.add('active');
      }
    }
  });

  // Highlight parent menu if on a subpage
  const dropdownParents = document.querySelectorAll('.custom-dropdown');
  dropdownParents.forEach(parent => {
    const childLinks = parent.querySelectorAll('.custom-dropdown-item');
    childLinks.forEach(child => {
      const childPath = new URL(child.href).pathname;

      // If current path matches a subpage, add "active" to parent
      if (childPath === currentPath) {
        parent.classList.add('active');
      }
    });
  });
});