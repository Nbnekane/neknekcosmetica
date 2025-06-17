/* scripts.js para NekNek - Interactividad básica */

/**
 * Detectar idioma guardado previamente y aplicarlo.
 * Por ahora, esto solo guarda la selección en localStorage.
 * (En un sitio multilingüe completo, necesitarás contenido dinámico o duplicado por idioma.)
 */
document.addEventListener("DOMContentLoaded", () => {
  const selectorIdioma = document.querySelector("select");

  if (selectorIdioma) {
    // Cargar idioma guardado
    const idiomaGuardado = localStorage.getItem("neknek_idioma");
    if (idiomaGuardado) {
      selectorIdioma.value = idiomaGuardado;
    }

    // Escuchar cambios
    selectorIdioma.addEventListener("change", (e) => {
      const nuevoIdioma = e.target.value;
      localStorage.setItem("neknek_idioma", nuevoIdioma);
      alert(`Idioma seleccionado: ${nuevoIdioma.toUpperCase()}`);
      // Aquí puedes redirigir, recargar o activar traducción dinámica
    });
  }
});

/**
 * Ejemplo: Función reutilizable para mostrar alertas estilizadas (podrías usarla para botones CTA, etc.)
 */
function mostrarAlerta(mensaje) {
  alert(`🔔 NekNek dice: ${mensaje}`);
}

/**
 * Lugar preparado para validaciones básicas de formularios
 */
function validarFormularioContacto() {
  const nombre = document.querySelector("#nombre");
  const email = document.querySelector("#email");
  if (!nombre.value || !email.value) {
    mostrarAlerta("Por favor, completa todos los campos requeridos.");
    return false;
  }
  return true;
}
