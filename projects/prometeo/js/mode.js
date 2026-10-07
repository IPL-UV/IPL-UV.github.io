// MODAL
function openModal(imageUrl, title, description) {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  var modalCaption = document.getElementById("modalCaption");
  if (!modal || !modalImage || !modalCaption) return;
  var render = function (s) {
    return (typeof marked !== 'undefined' && marked.parse) ? marked.parse(s || "") : (s || "");
  };
  modalImage.src = imageUrl;
  modalCaption.innerHTML = `<strong>${render(title)}</strong><br>${render(description)}`;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  if (modal) modal.style.display = "none";
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    var modal = document.getElementById('imageModal');
    if (modal && modal.style.display === 'block') closeModal();
  }
});

// NAVBAR
document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.custom-navbar-collapse');
  const currentPath = window.location.pathname;

  if (toggler && navbarCollapse) {
    toggler.setAttribute('aria-expanded', 'false');
    toggler.addEventListener('click', function () {
      const open = navbarCollapse.classList.toggle('show');
      toggler.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close menu when clicking outside the navbar
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.custom-navbars')) {
        navbarCollapse.classList.remove('show');
        toggler.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Highlight active nav item
  document.querySelectorAll('.custom-nav-link').forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath && currentPath !== '/') {
      const item = link.closest('.custom-nav-item');
      if (item) item.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Highlight active dropdown item
  document.querySelectorAll('.custom-dropdown-item').forEach(item => {
    if (new URL(item.href).pathname === currentPath) {
      item.classList.add('active');

      // Ensure parent menu is also highlighted
      const parentDropdown = item.closest('.custom-dropdown');
      if (parentDropdown) {
        parentDropdown.classList.add('active');
      }
    }
  });

  // Highlight parent menu if on a subpage
  document.querySelectorAll('.custom-dropdown').forEach(parent => {
    parent.querySelectorAll('.custom-dropdown-item').forEach(child => {
      if (new URL(child.href).pathname === currentPath) {
        parent.classList.add('active');
      }
    });
  });
});
