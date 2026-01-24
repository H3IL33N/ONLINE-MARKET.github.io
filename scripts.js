let carrito = [];
let contador = 0;

function agregarCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  contador++;
  document.getElementById("contador").textContent = contador;
  console.log(carrito);
}
