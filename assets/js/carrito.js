// Carrito
// #1 BASE DE DATOS
const db = [
  {
    id: 1,
    nombre: 'Blusa Estampada Negra',
    precio: 45.00,
    imagen: './assets/img/blusaminnie.png',
    categoria: 'Blusas',
    cantidad: 5
  },
  {
    id: 2,
    nombre: 'Jumper Rino',
    precio: 120.00,
    imagen: './assets/img/jumperrino.png',
    categoria: 'Pantalones',
    cantidad: 7
  },
  {
    id: 3,
    nombre: 'Blusa Rosada',
    precio: 76.00,
    imagen: './assets/img/blusarosada.png',
    categoria: 'Blusas',
    cantidad: 4
  },
  {
    id: 4,
    nombre: 'Blusa Roja',
    precio: 76.00,
    imagen: './assets/img/blusaroja.png',
    categoria: 'Blusas',
    cantidad: 8
  },
  {
    id: 5,
    nombre: 'Jumper Conejo',
    precio: 110.00,
    imagen: './assets/img/jumperconejo.png',
    categoria: 'Pantalones',
    cantidad: 7
  },
  {
    id: 6,
    nombre: 'Vestido Azul',
    precio: 140.00,
    imagen: './assets/img/vestidoazul.png',
    categoria: 'Vestidos',
    cantidad: 6
  },
  {
    id: 7,
    nombre: 'Blusa Estampada Rosada ',
    precio: 64.00,
    imagen: './assets/img/blusarosaminnie.png',
    categoria: 'Blusas',
    cantidad: 8
  },
  {
    id: 8,
    nombre: 'Vestido blanco ',
    precio: 15.00,
    imagen: './assets/img/vestidoescarcha.png',
    categoria: 'Vestidos',
    cantidad: 6
  },  
  {
    id: 9,
    nombre: 'Braga Jean',
    precio: 89.00,
    imagen: './assets/img/braga.png',
    categoria: 'Vestidos',
    cantidad: 7
  }
]


// #2 Pintar los productos en el DOM
const productos = db

function pintarProductos() {
  for (let { id, nombre, precio, cantidad } of productos) {
    console.log(id, nombre, 'price', precio, 'qty:', cantidad)
  }
}

console.log('#1 pintando productos')
pintarProductos()

// #3 Carrito
let carrito = []

console.log('#Creando el carrito')

// #4 agregar al carrito
function agregarCarrito(id, cantidad = 1) {
  const productoEncontrado = productos.find((p) => p.id === id)

  if (productoEncontrado && productoEncontrado.cantidad > 0) {
    const articuloEncontrado = carrito.find((p) => p.id === id)

    if (articuloEncontrado) {
      if (checarStock(id, cantidad + articuloEncontrado.cantidad)) {
        articuloEncontrado.cantidad++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      carrito.push({ id: productoEncontrado.id, cantidad })
    }
  } else {
    window.alert('Producto agotado')
  }
}

console.log('Agregando productos')
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(2)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)

function checarStock(id, cantidad) {
  const producto = productos.find((p) => p.id === id)

  return producto.cantidad - cantidad >= 0
}

// #5 remover articulos
function removerDelCarrito(id, cantidad = 1) {
  const articulo = carrito.find((p) => p.id === id)

  if (articulo && articulo.cantidad - cantidad > 0) {
    articulo.cantidad--
  } else {
    carrito = carrito.filter((p) => p.id !== id)
  }
}

console.log('Removiendo uno por uno del carrito')
removerDelCarrito(1)

// #6 Eliminar del carrito
function eliminarDelCarrito(id) {
  console.log(id)
  const articulo = carrito.find((p) => p.id === id)
  const findIndex = carrito.indexOf(articulo)

  carrito.splice(findIndex, 1)
}

console.log('Eliminando un producto del carrito')
eliminarDelCarrito(5)

// #7 Contar Articulos
function contadorDeArticulos() {
  let suma = 0

  for (let articulo of carrito) {
    suma += articulo.cantidad
  }

  return suma
}

// #8 El total
function obtenerTotal() {
  let suma = 0

  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    suma += producto.precio * articulo.cantidad
  }

  return suma
}

// #9 Limpiar carrito
function limpiarCarrito() {
  carrito = []
}

// limpiarCarrito()

// #10 Comparar
function comprar() {
  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    producto.cantidad -= articulo.cantidad
  }
  console.log('Productos actualizados')
  pintarProductos()
}


console.log('#Carrito:', carrito)
console.log('Total a pagar:', obtenerTotal())
console.log('Cantidad de articulos agregados al carrito:', contadorDeArticulos())

comprar()