/*Variables*/

const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;

/*Abre el Lightbox*/

const abreLightbox = (event) => {
  imagenActiva.src = event.target.src;
  lightbox.style.display = 'flex';
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox);
});

/*Cierra el Lightbox */

btnCierra.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

/* Adelanta la imagen*/

const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);

/*Retrocede la Imagen*/

const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocederImagen);

/* VENTANA MODAL */

/* VENTANA MODAL */
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');

const openModal = () => {
  Swal.fire({
    text: 'Hay muchisimo que podría contarte sobre mi, pero mejor es que lo veas por ti mismo! Sigueme en Instagram!',
    backdrop: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    customClass: {
      container: 'modal1',
      popup: 'popup-class',
    },
    backdrop: `rgba(0,0,0,0.9)`,
    buttonsStyling: true,
    showCloseButton: true,
    closeButtonAriaLabel: 'Cerrar alerta',
    showConfirmButton: false,
    showClass: {
      popup: 'animate__bounceIn',
    },
    hideClass: {
      popup: 'animate__bounceOut',
    },
  });
};

btnsOpenModal.addEventListener('click', openModal);
