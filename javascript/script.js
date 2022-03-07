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
const divProductos = document.getElementById("idProductos2");

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
let listaDeProductos = [];
let agregarProducto = (indice) => {
  let carrito = document.getElementById("idCarrito");
  let nuevo = document.createElement("div");
  nuevo.innerText = productos[indice].producto + " " + productos[indice].precio;
  nuevo.classList.add("fondoAzul");
  carrito.appendChild(nuevo);
  listaDeProductos.push(productos[indice]);
  localStorage.setItem("carrito", JSON.stringify(listaDeProductos));
};
/* console.log(productos[indice].descripcion); */
