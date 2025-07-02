# NekNek Cosmética: Asesoramiento de Belleza Personalizada

![Captura de pantalla de la página de inicio de NekNek](https://i.imgur.com/8i2hY3k.png)

## 📜 Resumen del Proyecto

**NekNek Cosmética** es una Single Page Application (SPA) desarrollada con **HTML, CSS y JavaScript puros (Vanilla JS)**. El proyecto nace con la misión de ofrecer un espacio digital elegante, informativo y accesible para el asesoramiento de belleza y cosmética. La plataforma se centra en la filosofía de "vivir el maquillaje sin modas, a tu manera", empoderando a los usuarios a través del conocimiento para que tomen decisiones informadas sobre su cuidado personal.

La aplicación web es completamente estática, desplegada en GitHub Pages, y no depende de ningún framework de front-end, lo que demuestra una implementación eficiente y optimizada utilizando tecnologías web fundamentales.

**➡️ Ver proyecto en vivo: [https://nbnekane.github.io/neknekcosmetica/](https://nbnekane.github.io/neknekcosmetica/)**

---

## 📋 Tabla de Contenidos

1.  [Arquitectura y Lógica de la Aplicación](#-arquitectura-y-lógica-de-la-aplicación)
2.  [Stack Tecnológico](#-stack-tecnológico)
3.  [Características Destacadas](#-características-destacadas)
4.  [Estructura de Ficheros](#-estructura-de-ficheros)
5.  [Instalación y Despliegue Local](#-instalación-y-despliegue-local)
6.  [Despliegue](#-despliegue)
7.  [Autor](#-autor)

---

## 🏛️ Arquitectura y Lógica de la Aplicación

El núcleo del proyecto es su arquitectura de **Single Page Application (SPA)**, implementada desde cero con JavaScript. Esta decisión técnica elimina la necesidad de recargar la página, ofreciendo una experiencia de usuario fluida y rápida, similar a la de aplicaciones construidas con frameworks modernos como React o Vue.

La lógica de enrutamiento se gestiona a través del `hash` de la URL (`window.location.hash`).

### Funcionamiento del Enrutador:

1.  **Escucha de Eventos:** Un event listener global se asigna al evento `hashchange` de la ventana. Este evento se dispara cada vez que la parte del hash de la URL cambia (por ejemplo, de `#home` a `#rostro`).
2.  **Navegación Inicial:** Al cargar la página por primera vez (`DOMContentLoaded`), el script comprueba el hash actual para mostrar la sección correcta. Si no hay hash, se muestra la página de inicio por defecto (`#home`).
3.  **Actualización de Vistas:**
    * Cuando el hash cambia, el script identifica el ID de la nueva sección a mostrar (ej., `rostro`).
    * Itera sobre todos los elementos con la clase `.app-page`, eliminando la clase `active` de la sección que estaba visible.
    * Añade la clase `active` a la nueva sección correspondiente, haciéndola visible a través de CSS (`display: block`).
    * Se actualiza también el estado visual del menú de navegación, añadiendo la clase `active` al enlace `<a>` cuyo `href` coincide con el nuevo hash.

Este enfoque, aunque sencillo, es robusto y eficiente para un sitio de contenido estático, garantizando un rendimiento óptimo al minimizar la manipulación del DOM y evitar peticiones de red innecesarias.

---

## 🛠️ Stack Tecnológico

### Frontend y Estilos

* **HTML5:** Utilizado para una estructura semántica, accesible (atributos `aria-*`) y bien organizada.
* **CSS3 (Puro):**
    * **Custom Properties (Variables):** Para una gestión centralizada y consistente de la paleta de colores (`#FFF8F0`, `#6A0DAD`, etc.) y tipografías.
    * **Flexbox & Grid Layout:** Para la creación de layouts complejos y totalmente responsivos.
    * **Animaciones y Transiciones (`@keyframes`, `transition`):** Implementadas para mejorar la experiencia de usuario con efectos visuales sutiles y elegantes (fade-in de páginas, efectos hover, banner pulsante).
* **Tailwind CSS (CDN):** Integrado para agilizar el desarrollo de componentes específicos y aplicar utilidades de espaciado, tipografía y diseño de forma rápida.
* **JavaScript (ES6+ Vainilla):**
    * Lógica de la SPA (enrutador basado en hash).
    * Manipulación dinámica del DOM.
    * Control de componentes interactivos como el carrusel de imágenes y el banner flotante.

### Herramientas y Servicios

* **Google Fonts:** Para la importación de la familia tipográfica 'Inter'.
* **Google Analytics (gtag.js):** Integrado para el seguimiento de métricas de usuario y analítica web.
* **GitHub Pages:** Plataforma de hosting para el despliegue del sitio estático.
* **Unsplash:** Como fuente de las imágenes de alta calidad utilizadas en la aplicación.

---

## ✨ Características Destacadas

* **Arquitectura SPA Pura:** Navegación instantánea sin recargas.
* **Diseño 100% Responsive:** Adaptación perfecta a cualquier tamaño de pantalla, desde móviles pequeños hasta monitores de escritorio.
* **Interfaz de Usuario Elegante:** Paleta de colores cohesiva y diseño profesional que inspira confianza.
* **Componentes Interactivos:**
    * **Carrusel Automático:** Muestra imágenes de alta calidad con un overlay de texto en la página de inicio.
    * **Banner Flotante Animado:** Un Call-to-Action persistente con una animación de pulso para atraer la atención.
* **Optimización SEO:** Uso de meta-tags (`description`), estructura semántica de encabezados (`h1`, `h2`) y atributos `alt` en todas las imágenes para mejorar el posicionamiento en buscadores.
* **Accesibilidad (a11y):** Implementación de atributos `aria-label`, `role` y `tabindex` para mejorar la navegación para usuarios con tecnologías de asistencia.

---

## 📂 Estructura de Ficheros

El proyecto está autocontenido en un único fichero `index.html` para simplificar al máximo el despliegue.

