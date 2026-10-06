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
  const year = document.getElementById('year-filter').value;
  const month = document.getElementById('month-filter').value;
  const speaker = document.getElementById('speaker-filter').value;
  const items = document.querySelectorAll('.seminar-item');

  // Gather available options based on current filter selection
  let availableYears = new Set();
  let availableMonths = new Set();
  let availableSpeakers = new Set();

  items.forEach(item => {
    const itemYear = item.getAttribute('data-year');
    const itemMonth = item.getAttribute('data-month');
    const itemSpeaker = item.getAttribute('data-speaker');

    const yearMatch = (year === "" || itemYear === year);
    const monthMatch = (month === "" || itemMonth === month);
    const speakerMatch = (speaker === "" || itemSpeaker === speaker);
    addEventListener
    // Display or hide items based on selected filters
    if (yearMatch && monthMatch && speakerMatch) {
      item.style.display = 'flex';
      availableYears.add(itemYear);
      availableMonths.add(itemMonth);
      availableSpeakers.add(itemSpeaker);
    } else {
      item.style.display = 'none';
    }
  });

  // Update Year Filter
  const yearFilter = document.getElementById('year-filter');
  Array.from(yearFilter.options).forEach(option => {
    if (option.value === "" || availableYears.has(option.value)) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });

  // Update Month Filter
  const monthFilter = document.getElementById('month-filter');
  Array.from(monthFilter.options).forEach(option => {
    if (option.value === "" || availableMonths.has(option.value)) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });

  // Update Speaker Filter
  const speakerFilter = document.getElementById('speaker-filter');
  Array.from(speakerFilter.options).forEach(option => {
    if (option.value === "" || availableSpeakers.has(option.value)) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
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