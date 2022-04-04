/* BARRA DE NAVEGACIÓN */
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
async function cargarProductos1() {
  const response = await fetch('../productos/productos.json');
  return await response.json();
}

cargarProductos1().then((productos) => {
  productos.forEach((element) => {
    main.innerHTML += ` <div class="caja">
    <div class="cajaImg">
    <img class="caja--img" src="../productos/${element.img}">
    </div>
    <div class="caja--datos">
    <p class="nombre">${element.nombre}</p>
    <p class="precio">$ <span> ${element.precio}</span></p>
    <button class="btn-agregar" data-id="${element.id}">Agregar</button>
    </div>
    </div>
    `;
  });
  const btnAgregar = document.querySelectorAll('.btn-agregar');
  btnAgregar.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      let ripples = document.createElement('span');
      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      this.appendChild(ripples);
      setTimeout(() => {
        ripples.remove();
      }, 2000);

      let cardPadre = e.target.parentElement;
      agregarAlCarrito(cardPadre);
    });
  });
});

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

cargarProductos1();
mostrarCarrito();
escucharBotonesSidebar();
