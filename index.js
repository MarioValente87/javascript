/* SCROLL-REVEAL */
window.sr = ScrollReveal();

sr.reveal('.container1', {
  duration: 4000,
  origin: 'bottom',
  distance: '100px',
});

/* SWIPER */

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*Variables*/

const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;

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
