const productos = [
  {
    nombre: 'Pincel',
    precio: 350,
    imagen: '../productos/img/pincel.jpg',
    id: 0,
  },
  {
    nombre: 'celular',
    precio: 250,
    imagen: '../productos/img/celular.jpg',
    id: 1,
  },
  {
    nombre: 'Microfono',
    precio: 450,
    imagen: '../productos/img/microfono.jpg',
    id: 2,
  },
];

const container = document.querySelector('.container');
const main = document.querySelector('#main');
const sidebar = document.querySelector('.sidebar');
const btnCarrito = document.querySelector('.btn-carrito');
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

/* BOTON del carrito(la imagen del nav) con Swal */

btnCarrito.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  if (carrito.length === 0) {
    //para que aparezca un alert si haces click en el carrito y esta vacio
    Swal.fire({
      title: 'Carrito Vacio',
      text: '🥲',
      icon: 'warning',
      background: '#333',
    });
  }
});

/* CARGA DE PRODUCTOS */
const cargarProductos = () => {
  productos.forEach((element) => {
    main.innerHTML += ` <div class="caja">
    <img class="caja--img" src="${element.imagen}">
    <div class="caja--datos">
    <p class="nombre">${element.nombre}</p>
    <p class="precio">$ <span> ${element.precio}</span></p>
    <button class="btn-agregar" data-id="${element.id}">Agregar</button>
    </div>
    </div>
    `;
  });
  const btnAgregar = document.querySelectorAll('.btn-agregar');
  btnAgregar.forEach((e) =>
    e.addEventListener('click', (e) => {
      let cardPadre = e.target.parentElement;
      agregarAlCarrito(cardPadre);
    })
  );
};
//como vamos a usar varias veces la alerta, conviene tenerla en una función
const swalToast = (texto, color, posicion) => {
  Swal.fire({
    toast: true,
    text: texto,
    background: color /* '#80ff80' */,
    showConfirmButton: false,
    position: posicion /* 'bottom-end' */,
    timer: 1400,
    timerProgressBar: true,
    showClass: {
      popup: 'animate__animated animate__fadeInDown',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
    },
  });
};

//Esta función "agregarAlCarrito" permite sacar la información de la card en formato de objeto al carrito.
const agregarAlCarrito = (cardPadre) => {
  swalToast('Producto Agregado', '#80ff80', 'bottom-end');
  let producto = {
    nombre: cardPadre.querySelector('.nombre').textContent,
    precio: Number(cardPadre.querySelector('.precio span').textContent),
    cantidad: 1,
    imagen: cardPadre.parentElement.querySelector('img').src,
    id: Number(cardPadre.querySelector('button').getAttribute('data-id')),
  };
  let productoEncontrado = carrito.find(
    (element) => element.id === producto.id
  );
  if (productoEncontrado) {
    productoEncontrado.cantidad++;
  } else {
    carrito.push(producto);
  }
  console.log(carrito);
  mostrarCarrito();
};

const mostrarCarrito = () => {
  sidebar.innerHTML = '  ';
  carrito.forEach((element) => {
    let { imagen, nombre, precio, cantidad, id } = element;
    sidebar.innerHTML += `
    <div class= "caja--carrito">
            <img class="caja-carrito-img" src="${imagen}">
            <div class="caja-carrito-datos">
            <p class="nombre">${nombre}</p>
            <p class="cantidad">CANTIDAD: ${cantidad}</p>
            <p class="subtotal">Subtotal: $ ${precio * cantidad}</p>
            <p class="precio">$<span>${precio}</span></p>
            <button class="btn-restar" data-id="${id}">-</button>
            <button class="btn-borrar" data-id="${id}">Borrar</button>
           </div>
      </div>
    `;
  });
  localStorage.setItem('carrito', JSON.stringify(carrito));
  aumentarNumeroCantidadCarrito();
};

const restarProducto = (productoRestar) => {
  swalToast('ProductoRetirado', '#ff99cc', 'bottom-end');
  let productoEncontrado = carrito.find(
    (element) => element.id === Number(productoRestar)
  );
  if (productoEncontrado) {
    productoEncontrado.cantidad--;

    if (productoEncontrado.cantidad === 0) {
      productoEncontrado.cantidad = 1;
    }
  }
  mostrarCarrito();
};

const borrarProducto = (productoBorrar) => {
  carrito = carrito.filter((element) => element.id !== Number(productoBorrar));
  mostrarCarrito();
};

const escucharBotonesSidebar = () => {
  sidebar.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-restar')) {
      restarProducto(e.target.getAttribute('data-id'));
    }
    if (e.target.classList.contains('btn-borrar')) {
      borrarProducto(e.target.getAttribute('data-id'));
    }
  });
};

const aumentarNumeroCantidadCarrito = () => {
  let total = carrito.reduce((acc, ite) => acc + ite.cantidad, 0);
  document.querySelector('.cant--carrito').textContent = total;
};

cargarProductos();
mostrarCarrito();
escucharBotonesSidebar();
/* const idCart = document.querySelector('#idCart'); */

/* class Producto {
  constructor(producto, descripcion, precio) {
    this.producto = producto;
    this.imagen;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

const producto1 = new Producto(
  'pincel',
  'Pincel de calidad premium para crear tus mejores obras de arte',
  400
);
const producto2 = new Producto(
  'microfono',
  'Si te gusta cantar, este producto es para vos',
  1000
);
const producto3 = new Producto(
  'celular',
  'Si te gusta crear contenido, este producto es para vos',
  20000
);

const productos = [producto1, producto2, producto3];
const divProductos = document.getElementById('idProductos2');

productos.forEach((productosEnArray, indice) => {
  divProductos.innerHTML += `<div class="card" id="productosEnArray${indice}" style="width: 18rem;">
  <img src="" class="card-img-top" alt="...">
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
  let carrito = document.getElementById('idCarrito');
  let nuevo = document.createElement('div');
  nuevo.innerText = productos[indice].producto + ' ' + productos[indice].precio;
  nuevo.classList.add('fondoAzul');
  carrito.appendChild(nuevo);
  listaDeProductos.push(productos[indice]);
  localStorage.setItem('carrito', JSON.stringify(listaDeProductos));
};
 */
/* console.log(productos[indice].descripcion); */
