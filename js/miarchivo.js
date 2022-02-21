/* let chistes= true

while(chistes=== true){
alert("Están dos borrachos y uno le dice al otro:No sigas bebiendo que te estás poniendo borroso")
alert("Paco, ¿dónde estuviste?En una clínica donde te quitan las ganas de fumar.¡Pero si estás fumando!Ya… pero sin ganas")

let confirmacion = prompt ("Te cuento más chistes")
if(confirmacion === "no") {
    break
}

alert("¿Sabes cómo se queda un mago después de comer?Magordito")
alert ("Cariño, ¿tengo la nariz grande? No, tienes una nariz común.- ¿Ah, sí? Sí, ¡común tucán!")

confirmacion = prompt ("Te cuento más chistes")
if (confirmacion === "no") {
    break
}

alert("¿Sabes cómo se queda un mago después de comer?Magordito")
alert ("Cariño, ¿tengo la nariz grande? No, tienes una nariz común.- ¿Ah, sí? Sí, ¡común tucán!")

confirmacion = prompt ("Te cuento más chistes")
if (confirmacion == "no")
{
break} 
} 

//********************************************* */

/* let dado= Math.trunc(Math.random() * 6) +1;
do{
    alert (`Tiraste un ${dado}`);
    dado= Math.trunc(Math.random() * 6) +1;
    if (dado === 6 )
    alert("Salió 6, el bucle terminó!")
}

while(dado !==6)  */

/* 1ER ENTREGA OBLIGATORIA: SIMULADOR INTERACTIVO */

/* let texto = ""
let total = 0

const bienvenida = function() {
    alert("Bievenido a Nuestra Tienda de Electrodomésticos")
} 

const listaProductos = function () {
    let productos;

    do {
        productos = parseInt(prompt("Seleccione un producto: \n 1- Placa de video \n 2- Auriculares \n 3- Microfono \n"))
    }
    while (productos < 1 || productos > 3 || isNaN(productos));

    let productoSeleccionado;
    
    switch (productos) {
        case 1:
            productoSeleccionado = "Placa de video";
            break
        case 2:
            productoSeleccionado = "Auriculares";
            break
        case 3:
            productoSeleccionado = "Microfono";
            break
        }
    return productoSeleccionado
}


const Precio = (productoSeleccionado) => {
    if (productoSeleccionado === "Placa de video") {
    return 200000;
    } else if (productoSeleccionado === "Auriculares") {
    return 23000;
    } else if (productoSeleccionado === "Microfono") {
    return 17000;
    } else {
    return "500";
    }
};

  
  let informaProductoPrecio = function (productoSeleccionado, precioCompra){
    texto += `\n Usted seleccionó\n ${productoSeleccionado} \n y sale ${precioCompra}`
    total += precioCompra 
    let seguir = confirm("¿Querés comprar algo más? ");
    if ( seguir === true) {
        let productoSeleccionado = listaProductos();
        let precioCompra= Precio(productoSeleccionado)
        let aviso = informaProductoPrecio(productoSeleccionado, precioCompra)
    } else {
        alert (texto);
        alert (`El total es ${total}`)
    }
}

  const descuento = function(total) {
    if (total >= 150) {
        total -=  100
        alert (`Por buen cliente te descontamos $100, entonces es ${total}`)
    }
    return total
  }

  const modalidadPago = function () {
    let modalidad = parseInt(prompt( "Elija la modalidad de pago \n 1 - tarjeta \n 2- efectivo"))
     if (modalidad === 1) {
         let cuotas = parseInt(prompt("Elija la cantidad de cuotas \n 1- 12 \n 2- 6"));
         if (cuotas === 2) {
             total += total / 6 
             return alert (`El total es ${total}`)
         } else if (cuotas === 1){
             return alert ("No amigo, 12 cuotas es demasiado, no te vendo nada!")
         }
     } else if (modalidad === 2) {
         return alert("Esta es mi clase de cliente! En billetes de mil por favor")
     }
}





bienvenida()
let productoSeleccionado = listaProductos();
let precioCompra= Precio(productoSeleccionado)
let aviso = informaProductoPrecio(productoSeleccionado, precioCompra);
let descuento1 = descuento (total)
let modalidad = modalidadPago()
 */


// SIMULADOR MODIFICADO

let texto = ""
let total = 0

let productosArray = [
    {
        nombre: "Placa de video",
        precio: 200000
    },
    {
        nombre: "Auriculares",
        precio: 5000
    },
    {
        nombre: "Microfono",
        precio: 2000
    },
]

const bienvenida = function () {
    alert("Bievenido a Nuestra Tienda de Electrodomésticos")
}

const listaProductos = function () {
    let productos;

    do {
        productos = parseInt(prompt("Seleccione un producto: \n 1- Placa de video \n 2- Auriculares \n 3- Microfono \n"))
    }
    while (productos < 1 || productos > 3 || isNaN(productos));
    return productosArray[productos - 1]
}


const Precio = (productoSeleccionado) => {
    if (productoSeleccionado === "Placa de video") {
        return 200000;
    } else if (productoSeleccionado === "Auriculares") {
        return 23000;
    } else if (productoSeleccionado === "Microfono") {
        return 17000;
    } else {
        return "500";
    }
};


let informaProductoPrecio = function (productoSeleccionado) {
    texto += `\n Usted seleccionó\n ${productoSeleccionado.nombre} \n y sale ${productoSeleccionado.precio}`
    total += productoSeleccionado.precio
    let seguir = confirm("¿Querés comprar algo más? ");
    if (seguir) {
        let productoSeleccionado = listaProductos();
        let aviso = informaProductoPrecio(productoSeleccionado)
    } else {
        alert(texto);
        alert(`El total es ${total}`)
    }
}

const descuento = function (total) {
    if (total >= 150) {
        total += - 100
        alert(`Por buen cliente te descontamos $100, entonces es ${total}`)
    }
    return total
}

const modalidadPago = function () {
    let modalidad = parseInt(prompt("Elija la modalidad de pago \n 1 - tarjeta \n 2- efectivo"))
    if (modalidad === 1) {
        let cuotas = parseInt(prompt("Elija la cantidad de cuotas \n 1- 12 \n 2- 6"));
        if (cuotas === 2) {
            total += total / 6
            return alert(`El total es ${total}`)
        } else if (cuotas === 1) {
            return alert("No amigo, 12 cuotas es demasiado, no te vendo nada!")
        }
    } else if (modalidad === 2) {
        return alert("Esta es mi clase de cliente! En billetes de mil por favor")
    }
}





bienvenida()
let productoSeleccionado = listaProductos();
let precioCompra = Precio(productoSeleccionado)
let aviso = informaProductoPrecio(productoSeleccionado, precioCompra);
let descuento1 = descuento(total)
let modalidad = modalidadPago()