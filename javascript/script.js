"use strict";

class Producto {
  constructor(producto, descripcion, precio) {
    this.producto = producto;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

const producto1 = new Producto(
  "pincel",
  "Pincel de calidad premium para crear tus mejores obras de arte",
  400
);
const producto2 = new Producto(
  "microfono",
  "Si te gusta cantar, este producto es para vos",
  1000
);
const producto3 = new Producto(
  "celular",
  "Si te gusta crear contenido, este producto es para vos",
  20000
);

const productos = [producto1, producto2, producto3];
let divProductos = document.getElementById("idProductos");

productos.forEach((productosEnArray, indice) => {
  divProductos.innerHTML += `<div class="card" id="productosEnArray${indice}" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${productosEnArray.producto}</h5>
    <p class="card-text">${productosEnArray.descripcion}</p>
    <p> ${productosEnArray.precio}</p>
    <button onClick="agregarProducto(${indice})" name="idAddCart" class="btn btn-primary">Agregar al Carrito</button>
  </div>
</div>
`;
});

let agregarProducto = (indice) => {
  let carrito = document.getElementById("idCarrito");
  let nuevo = document.createElement("div");
  nuevo.innerText = productos[indice].producto + " " + productos[indice].precio;
  nuevo.classList.add("fondoAzul");
  carrito.appendChild(nuevo);

  /* console.log(productos[indice].descripcion); */
};

/* galeria. por algun motivo si descomento lo de productos no anda la galeria. Supongo que debe ser porque no funciona bien lo de productos */

/*Variables*/

const btnCierra = document.querySelector("#btn-cierra");
const btnAdelanta = document.querySelector("#btn-adelanta");
const btnRetrocede = document.querySelector("#btn-retrocede");
const imagenes = document.querySelectorAll("#galeria img");
const lightbox = document.querySelector("#contenedor-principal");
const imagenActiva = document.querySelector("#img-activa");
let indiceImagen = 0;

/*Abre el Lightbox*/

const abreLightbox = (event) => {
  imagenActiva.src = event.target.src;
  lightbox.style.display = "flex";
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", abreLightbox);
});

/*Cierra el Lightbox */

/* btnCierra.addEventListener("click", () => {
  lightbox.style.display = "none";
}); */

/* Adelanta la imagen*/

const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;
};

/* btnAdelanta.addEventListener("click", adelantaImagen); */

/*Retrocede la Imagen*/

const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;
};

/* btnRetrocede.addEventListener("click", retrocederImagen); */

/* VENTANA MODAL */
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelector(".show-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
/* btnsOpenModal.addEventListener("click", openModal); */
/* btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
 */
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
