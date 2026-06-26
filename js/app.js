// Función para aplicar las restricciones visuales según el rol seleccionado
function aplicarRBAC() {
  const selector = document.getElementById('roleSelector');
  if (!selector) return;

  const rolActivo = selector.value;
  
  // Guardamos el rol activo en nuestro objeto de datos global
  appData.currentRole = rolActivo;

  // Buscamos todos los elementos de la interfaz que tengan restricciones de rol
  const elementosRestringidos = document.querySelectorAll('[data-role-restricted]');

  elementosRestringidos.forEach(elemento => {
    const rolesPermitidos = elemento.getAttribute('data-role-restricted').split(',');

    // Si el rol activo está dentro de los permitidos, mostramos el elemento; si no, lo ocultamos
    if (rolesPermitidos.includes(rolActivo)) {
      elemento.classList.remove('d-none');
    } else {
      elemento.classList.add('d-none');
    }
  });

  // Disparar un evento personalizado por si la pantalla actual necesita redibujar tablas o datos específicos
  const eventoCambioRol = new CustomEvent('cambioRol', { detail: { rol: rolActivo } });
  document.dispatchEvent(eventoCambioRol);
}

// Inicialización de escuchas cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('roleSelector');
  
  if (selector) {
    // Escuchar cuando el usuario cambie de rol en el Navbar
    selector.addEventListener('change', aplicarRBAC);
  }

  // Ejecutar la validación por primera vez al cargar la página
  aplicarRBAC();
});