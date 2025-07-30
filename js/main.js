// js/main.js

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

  function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Si ya existe el producto, incrementar cantidad
    const existente = carrito.find(p => p.titulo === producto.titulo);
    if (existente) {
      existente.cantidad++;
    } else {
      carrito.push(producto);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${producto.titulo} fue agregado al carrito`);
  }
});
