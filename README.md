# 🛒 TelCom Online

**Sitio web de tienda virtual desarrollado como proyecto de curso.**  
Incluye productos destacados, reseñas de clientes, carrito de compras con JavaScript, formulario de contacto y página de error personalizada.

🔗 **Versión en línea:** [https://maxiratti.github.io/telcom/](https://maxiratti.github.io/telcom/)

---

## 📁 Estructura del Proyecto

```
📦 telcom/
├── index.html              # Página principal: productos + reseñas
├── /pages/
│   ├── contacto.html       # Formulario de contacto
│   ├── carrito.html        # Carrito de compras dinámico
│   └── error404.html       # Página de error personalizada
├── /css/
│   ├── styles.css          # Estilos generales
│   ├── calesita.css        # Slider/banners
│   ├── contacto.css        # Estilos de formulario
│   └── error.css           # Animación de error 404
├── /js/
│   └── main.js             # Lógica de carrito y UI
├── /assets/
│   ├── img/                # Imágenes de productos, banners, reseñas
│   └── favicon/            # Íconos para dispositivos
```

---

## 📄 Descripción de las páginas

### `index.html`
- Página principal de la tienda.
- Contiene:
  - Header con logo y eslogan.
  - Menú de navegación.
  - Slider automático con banners (`calesita.css`).
  - Sección de **productos destacados** con botón "Comprar".
  - Sección de **reseñas** con diseño tipo cards.
  - **Botón flotante "Volver arriba"**.
  - Footer responsive.
  - Ícono de 🛒 carrito con contador en el menú.

### `/pages/carrito.html`
- Página dinámica que muestra los productos agregados.
- Funcionalidades:
  - Sumar/restar cantidad de productos.
  - Eliminar productos individualmente.
  - Vaciar el carrito.
  - Calcular total.
  - Finalizar compra (mensaje + redirección).
  - Ícono 🛒 actualizado automáticamente.

### `/pages/contacto.html`
- Formulario funcional usando [Formspree](https://formspree.io).
- Campos requeridos: nombre, email, teléfono, mensaje.
- Ícono de WhatsApp flotante.
- Botón "Volver arriba".

### `/pages/error404.html`
- Página personalizada para rutas inexistentes.
- Animaciones visuales (404 con rotaciones).
- Metaetiquetas para redes sociales.
- Botón para volver al inicio.

---

## 🎨 Estilos (`styles.css`)
- Uso de variables CSS:  
  `--primary`, `--secondary`, `--text`, `--rojo-oscuro`, etc.
- Layouts con `Flexbox` y `Grid`.
- Diseño responsive con media queries.
- Sombras, bordes redondeados y hover effects.
- Tipografías accesibles y jerarquía visual clara.

---

## 🧪 ¿Cómo probar el sitio?

1. Accedé a la versión online:  
   👉 [https://maxiratti.github.io/telcom/](https://maxiratti.github.io/telcom/)
2. Explorá las secciones desde el menú.
3. Usá los botones "Comprar" para llenar el carrito.
4. Ingresá a `Carrito` para gestionar tu compra.
5. Usá el formulario de contacto para enviar un mensaje.
6. Probá una URL inexistente para ver la página 404.

---

## 💡 Posibles mejoras futuras

- Validaciones JavaScript del formulario de contacto.
- Backend para procesar compras.
- Autenticación de usuarios.
- Almacenamiento de productos en JSON/API.
- Animaciones con AOS o GSAP.
- Paginado de productos.

---

## 👨‍💻 Autor y Créditos

Sitio desarrollado por **Maximiliano Carlos Ratti**  
Proyecto educativo de **Talento Tech**  
Todos los derechos reservados © 2025
