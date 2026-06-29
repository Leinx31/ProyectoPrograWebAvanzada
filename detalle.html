function aplicarRBAC() {
  const selector = document.getElementById('roleSelector');
  if (!selector) return;
  const rolActivo = selector.value;
  appData.currentRole = rolActivo;
  const elementosRestringidos = document.querySelectorAll('[data-role-restricted]');
  elementosRestringidos.forEach(elemento => {
    const rolesPermitidos = elemento.getAttribute('data-role-restricted').split(',');
    if (rolesPermitidos.includes(rolActivo)) {
      elemento.classList.remove('d-none');
    } else {
      elemento.classList.add('d-none');
    }
  });
  const eventoCambioRol = new CustomEvent('cambioRol', { detail: { rol: rolActivo } });
  document.dispatchEvent(eventoCambioRol);
}
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('roleSelector');
  if (selector) {
    selector.addEventListener('change', aplicarRBAC);
  }
  aplicarRBAC();
});