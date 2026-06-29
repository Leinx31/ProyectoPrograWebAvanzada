function limpiarPDF() {
  document.getElementById('inputPDF').value = '';
  document.getElementById('previewPDF').classList.add('d-none');
}
function guardarProduccion() {
  const titulo = document.getElementById('inputTitulo');
  const autor = document.getElementById('inputAutor');
  const fecha = document.getElementById('inputFecha');
  const categoria = document.getElementById('selectCategoria');
  const resumen = document.getElementById('inputResumen');
  const pdf = document.getElementById('inputPDF');
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
  if (!pdf.files || pdf.files.length === 0) {
    pdf.classList.add('is-invalid');
    valido = false;
  } else {
    pdf.classList.remove('is-invalid');
    pdf.classList.add('is-valid');
  }
  if (!valido) return;
  const nueva = {
    id: appData.producciones.length + 1,
    titulo: titulo.value.trim(),
    autor: autor.value.trim(),
    categoria: categoria.value,
    area: document.getElementById('selectArea').value || 'Sin definir',
    tecnologia: document.getElementById('selectTecnologia').value || 'Sin definir',
    fecha: fecha.value,
    estado: 'En Revisión'
  };
  appData.producciones.push(nueva);
  const alerta = document.getElementById('alertaExito');
  alerta.classList.remove('d-none');
  alerta.classList.add('show');
  document.getElementById('formularioRegistro').querySelectorAll('input, select, textarea').forEach(el => {
    el.value = '';
    el.classList.remove('is-valid', 'is-invalid');
  });
  limpiarPDF();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', () => {
  const inputPDF = document.getElementById('inputPDF');
  if (inputPDF) {
    inputPDF.addEventListener('change', () => {
      const archivo = inputPDF.files[0];
      if (archivo) {
        document.getElementById('nombrePDF').textContent = archivo.name;
        document.getElementById('previewPDF').classList.remove('d-none');
        inputPDF.classList.remove('is-invalid');
      }
    });
  }
});