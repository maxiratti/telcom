# TelCom Online 🌐

¡Bienvenido al sitio web de **TelCom Online**!  
Este sitio presenta una tienda virtual con productos destacados, reseñas de clientes, formulario de contacto y página de error personalizada.

---

## 🧾 Estructura del Proyecto

├── index.html # Página principal: productos + reseñas
├── contacto.html # Página de contacto con formulario
├── error404.html # Página de error personalizada
├── css/
│ ├── styles.css # Estilos principales del sitio
│ ├── calesita.css # Estilos del carrusel/slider
│ └── contacto.css # Estilos específicos para el formulario de contacto
├── assets/
│ ├── img/ # Imágenes de productos, banners y perfiles
│ └── favicon/ # Iconos para diferentes dispositivos


---

## 📄 Descripción de las páginas

### `index.html`
- Página principal de la tienda.
- Incluye:
  - **Header** con logo y eslogan centrado.
  - **Menú de navegación** con anclajes.
  - **Slider de banners** (`calesita.css`).
  - Sección de **productos destacados** (`section-fullscreen`).
  - Sección de **reseñas de clientes** (`section-fullscreen`).
  - **Footer** informativo.

### `contacto.html`
- Formulario funcional de contacto vía [Formspree](https://formspree.io).
- Incluye validación básica (`required`).
- Se mantiene el diseño coherente con el header y navegación.

### `error404.html`
- Página personalizada de error.
- Incluye diseño visual llamativo con numeración animada y botón para volver al inicio.
- Metaetiquetas para compartir en redes sociales.

---

## 🎨 Estilos (`styles.css`)

- Utiliza variables CSS (`--primary`, `--secondary`, `--text`).
- Implementa Flexbox y Grid para organización del layout.
- Las secciones de productos y reseñas usan `.section-fullscreen` para ocupar toda la pantalla (mínimo `100vh`).
- Están aplicadas buenas prácticas de reset (`* { box-sizing: border-box; }`).

---

## 🧪 Cómo visualizar el sitio

1. Abrí `index.html` en un navegador web moderno.
2. Navegá a través del menú para explorar todas las secciones.
3. Probá enviar un mensaje desde `contacto.html`.
4. Visitá una URL inexistente (o el enlace "Carrito") para ver `error404.html`.

---

## ✅ Recomendaciones de mejora

- Agregar validaciones JavaScript al formulario de contacto.
- Incluir más productos desde un archivo JSON o una API.
- Incorporar animaciones suaves para mejorar la experiencia del usuario.
- Optimizar imágenes para mayor velocidad de carga.
- Adaptar los archivos CSS para usar `@media` queries más completas.

---

## © Créditos

Sitio desarrollado por **Talento Tech**  (Maximiliano Carlos Ratti)
Todos los derechos reservados © 2025
