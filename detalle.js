let tipoModal = '';
function abrirModal(tipo) {
  tipoModal = tipo;
  document.getElementById('modalAgregarTitulo').textContent = `Agregar ${tipo}`;
  document.getElementById('modalInputNombre').value = '';
  document.getElementById('modalInputNombre').classList.remove('is-invalid');
}
function guardarDesdeModal() {
  const input = document.getElementById('modalInputNombre');
  if (!input.value.trim()) {
    input.classList.add('is-invalid');
    return;
  }
  input.classList.remove('is-invalid');
  const modal = bootstrap.Modal.getInstance(document.getElementById('modalAgregar'));
  modal.hide();
  mostrarAlerta(`${tipoModal} "${input.value.trim()}" agregado correctamente.`);
}
function mostrarAlerta(mensaje) {
  const alerta = document.getElementById('alertaMantenimiento');
  document.getElementById('mensajeAlerta').textContent = mensaje;
  alerta.classList.remove('d-none');
  alerta.classList.add('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    alerta.classList.remove('show');
    alerta.classList.add('d-none');
  }, 3500);
}