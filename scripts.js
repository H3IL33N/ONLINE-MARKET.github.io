let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// ACTUALIZAR CONTADOR
function actualizarContador() {
  const contador = document.getElementById("contador");
  if (contador) contador.textContent = carrito.length;
}

// AGREGAR PRODUCTO
function agregarCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador();
  alert("Producto agregado");
}

// MOSTRAR CARRITO
function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalTexto = document.getElementById("total");

  if (!lista) return;

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio;
    lista.innerHTML += `
      <div class="item">
        ${item.nombre} - $${item.precio.toLocaleString()}
        <button onclick="eliminar(${index})">❌</button>
      </div>
    `;
  });

  totalTexto.textContent = "Total: $" + total.toLocaleString();
}

// ELIMINAR
function eliminar(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
  actualizarContador();
}

// COMPRAR
function comprar() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }
  alert("Compra realizada con éxito ✅");
  carrito = [];
  localStorage.removeItem("carrito");
  window.location.href = "index.html";
}

// INICIAL
actualizarContador();
mostrarCarrito();
