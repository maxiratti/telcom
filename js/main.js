// js/main.js

// Espera que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const botonesComprar = document.querySelectorAll(".buy-button");

  botonesComprar.forEach((boton, index) => {
    boton.addEventListener("click", () => {
      const card = boton.closest(".product-card");
      const titulo = card.querySelector(".product-title").textContent;
      const precio = card.querySelector(".price").textContent;
      const imagen = card.querySelector("img").getAttribute("src");

      const producto = {
        titulo,
        precio,
        imagen,
        id: index,
        cantidad: 1
      };

      agregarAlCarrito(producto);
    });
  });

  // Cargar cantidad inicial al entrar
  actualizarCantidadCarrito();
});

function agregarAlCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Si ya existe el producto, aumentar cantidad
  const existente = carrito.find(p => p.titulo === producto.titulo);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push(producto);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${producto.titulo} fue agregado al carrito`);
  actualizarCantidadCarrito();
}

// Actualiza el número del carrito en el ícono
function actualizarCantidadCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  const spanCantidad = document.getElementById("carrito-cantidad");
  if (spanCantidad) {
    spanCantidad.textContent = total;
  }
}

// Botón volver arriba
document.addEventListener("DOMContentLoaded", () => {
  const btnArriba = document.getElementById("btn-volver-arriba");

  // Mostrar/ocultar botón al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnArriba.style.display = "block";
    } else {
      btnArriba.style.display = "none";
    }
  });

  // Ir arriba suavemente
  btnArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

