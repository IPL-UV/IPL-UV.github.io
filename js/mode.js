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