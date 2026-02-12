// Seleccionar todas las imágenes
const images = document.querySelectorAll('#jueguitos img');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

modal.innerHTML = `
  <span class="close">&times;</span>
  <img class="modal-content" />
`;

const modalImage = modal.querySelector('.modal-content');
const closeButton = modal.querySelector('.close');

// Mostrar modal al hacer clic en una imagen
images.forEach(image => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = image.src;
  });
});

// Cerrar modal al hacer clic en la "X"
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
