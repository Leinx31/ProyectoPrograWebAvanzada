function simularDescarga(e) {
  e.preventDefault();
  const alerta = document.createElement('div');
  alerta.className = 'alert alert-info alert-dismissible fade show mt-3';
  alerta.innerHTML = '<i class="bi bi-info-circle me-2"></i>Descarga simulada. En producción se descargaría el PDF real. <button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
  document.querySelector('main').prepend(alerta);
  setTimeout(() => alerta.remove(), 4000);
}
function guardarEdicion() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const idx = appData.producciones.findIndex(p => p.id === id);
  const titulo = document.getElementById('inputTitulo');
  const autor = document.getElementById('inputAutor');
  const fecha = document.getElementById('inputFecha');
  const categoria = document.getElementById('selectCategoria');
  const resumen = document.getElementById('inputResumen');
  let valido = true;
  [titulo, autor, fecha, resumen].forEach(campo => {
    if (!campo.value.trim()) {
      campo.classList.add('is-invalid');
      valido = false;
    } else {
      campo.classList.remove('is-invalid');
      campo.classList.add('is-valid');
    }
  });
  if (!categoria.value) {
    categoria.classList.add('is-invalid');
    valido = false;
  } else {
    categoria.classList.remove('is-invalid');
    categoria.classList.add('is-valid');
  }
  if (!valido) return;
  if (idx !== -1) {
    appData.producciones[idx].titulo = titulo.value.trim();
    appData.producciones[idx].autor = autor.value.trim();
    appData.producciones[idx].fecha = fecha.value;
    appData.producciones[idx].categoria = categoria.value;
    appData.producciones[idx].area = document.getElementById('selectArea').value || appData.producciones[idx].area;
    appData.producciones[idx].tecnologia = document.getElementById('selectTecnologia').value || appData.producciones[idx].tecnologia;
  }
  const alerta = document.getElementById('alertaExito');
  alerta.classList.remove('d-none');
  alerta.classList.add('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const prod = appData.producciones.find(p => p.id === id);
  if (!prod) return;
  document.getElementById('inputTitulo').value = prod.titulo;
  document.getElementById('inputAutor').value = prod.autor;
  document.getElementById('inputFecha').value = prod.fecha;
  document.getElementById('inputResumen').value = prod.resumen || 'Resumen de la producción académica registrada en el sistema.';
  const setSelect = (id, val) => {
    const sel = document.getElementById(id);
    [...sel.options].forEach(opt => { if (opt.value === val) opt.selected = true; });
  };
  setSelect('selectCategoria', prod.categoria);
  setSelect('selectArea', prod.area);
  setSelect('selectTecnologia', prod.tecnologia);
});