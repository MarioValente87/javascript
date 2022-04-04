/* Barra de navegación */
const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove('scroll-up');
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-up');
    body.classList.add('scroll-down');
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains('scroll-down')
  ) {
    body.classList.remove('scroll-down');
    body.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

/* SCROLL-REVEAL */
window.sr = ScrollReveal();

sr.reveal('.container1', {
  duration: 2000,
  interval: 106,
  origin: 'left',
  distance: '150%',
});

sr.reveal('.cajaTexto', {
  duration: 4000,
  origin: 'right',
  distance: '100px',
});

sr.reveal('.container2', {
  duration: 2000,
  interval: 106,
  origin: 'rigth',
  distance: '150%',
});

sr.reveal('.modelo-caja', {
  distance: '0px',
  opacity: 0,
  duration: 5000,
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

/* ********FORMULARO DE CONTACTO*************** */

const $form = document.querySelector('#form');
const $buttonMailTo = document.querySelector('#mailto');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  console.log(form.get('name'));
  $buttonMailTo.setAttribute(
    'href',
    `mailto:mariovalente2005@gmail.com?subject=${form.get(
      'name'
    )} Correo: ${form.get('email')} Celular: ${form.get(
      'telefono'
    )} Asunto: ${form.get('asunto')}&body=${form.get('mensaje')}`
  );
  $buttonMailTo.click();
}

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

/* btnsOpenModal.addEventListener('click', openModal); */
