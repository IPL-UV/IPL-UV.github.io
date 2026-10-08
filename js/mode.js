// MODAL
var _lastFocus = null;
function openModal(imageUrl, title, description) {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  var modalCaption = document.getElementById("modalCaption");
  if (!modal || !modalImage || !modalCaption) return;
  _lastFocus = document.activeElement;
  var render = function (s) {
    return (typeof marked !== 'undefined' && marked.parse) ? marked.parse(s || "") : (s || "");
  };
  modalImage.src = imageUrl;
  modalImage.alt = (title || "").replace(/[#*\[\]]/g, "").trim();
  modalCaption.innerHTML = `<strong>${render(title)}</strong><br>${render(description)}`;
  modal.style.display = "block";
  var close = modal.querySelector(".modal-close");
  if (close) close.focus();
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  if (modal) modal.style.display = "none";
  if (_lastFocus && _lastFocus.focus) _lastFocus.focus();
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
    navbarCollapse.id = navbarCollapse.id || 'primary-navigation';
    toggler.setAttribute('aria-controls', navbarCollapse.id);
    toggler.setAttribute('aria-expanded', 'false');
    const setMenu = function (open) {
      navbarCollapse.classList.toggle('show', open);
      toggler.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    toggler.addEventListener('click', function () {
      setMenu(!navbarCollapse.classList.contains('show'));
    });

    // Close menu when clicking outside the navbar
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.custom-navbars')) setMenu(false);
    });

    // Close menu with Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navbarCollapse.classList.contains('show')) {
        setMenu(false);
        toggler.focus();
      }
    });

    // Reset the open menu when the window grows back to desktop
    const desktop = window.matchMedia('(min-width: 1341px)');
    const onDesktop = function (ev) { if (ev.matches) setMenu(false); };
    if (desktop.addEventListener) desktop.addEventListener('change', onDesktop);
    else if (desktop.addListener) desktop.addListener(onDesktop);
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
