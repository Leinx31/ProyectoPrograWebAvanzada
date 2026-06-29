let idActual = null;
function simularDescarga(e) {
  e.preventDefault();
  const alerta = document.createElement('div');
  alerta.className = 'alert alert-info alert-dismissible fade show mt-3';
  alerta.innerHTML = '<i class="bi bi-info-circle me-2"></i>Descarga simulada. En producción se descargaría el documento PDF real. <button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
  document.getElementById('contenidoDetalle').prepend(alerta);
  setTimeout(() => alerta.remove(), 4000);
}
function confirmarEliminar() {
  const modal = bootstrap.Modal.getInstance(document.getElementById('modalEliminar'));
  modal.hide();
  appData.producciones = appData.producciones.filter(p => p.id !== idActual);
  window.location.href = 'producciones.html';
}
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  idActual = parseInt(params.get('id'));
  const prod = appData.producciones.find(p => p.id === idActual);
  const contenedor = document.getElementById('contenidoDetalle');
  if (!prod) {
    contenedor.innerHTML = `
      <div class="alert alert-warning">
        <i class="bi bi-exclamation-triangle me-2"></i>
        No se encontró la producción solicitada. <a href="producciones.html">Volver al listado</a>
      </div>`;
    return;
  }
  let badgeClass = 'bg-secondary';
  if (prod.estado === 'Publicado') badgeClass = 'bg-success';
  if (prod.estado === 'En Revisión') badgeClass = 'bg-warning text-dark';
  const rolActivo = appData.currentRole;
  const puedeEditar = (rolActivo === 'Administrador' || rolActivo === 'Docente');
  const puedeEliminar = (rolActivo === 'Administrador');
  if (puedeEditar) {
    document.getElementById('btnEditar').href = `editar.html?id=${prod.id}`;
    document.getElementById('btnEditar').classList.remove('d-none');
  }
  contenedor.innerHTML = `
    <div class="card shadow-sm mb-4">
      <div class="card-body p-4">
        <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
          <div>
            <h3 class="fw-bold mb-1">${prod.titulo}</h3>
            <p class="text-muted mb-0"><i class="bi bi-person me-1"></i>${prod.autor}</p>
          </div>
          <span class="badge ${badgeClass} fs-6">${prod.estado}</span>
        </div>
        <hr>
        <div class="row g-4 mb-4">
          <div class="col-12 col-md-6">
            <p class="text-muted small mb-1 text-uppercase fw-bold" style="font-size:0.7rem;">Categoría</p>
            <p class="mb-0"><span class="badge bg-light text-dark border">${prod.categoria}</span></p>
          </div>
          <div class="col-12 col-md-6">
            <p class="text-muted small mb-1 text-uppercase fw-bold" style="font-size:0.7rem;">Área de Conocimiento</p>
            <p class="mb-0">${prod.area || '—'}</p>
          </div>
          <div class="col-12 col-md-6">
            <p class="text-muted small mb-1 text-uppercase fw-bold" style="font-size:0.7rem;">Tecnología</p>
            <p class="mb-0">${prod.tecnologia || '—'}</p>
          </div>
          <div class="col-12 col-md-6">
            <p class="text-muted small mb-1 text-uppercase fw-bold" style="font-size:0.7rem;">Fecha de Publicación</p>
            <p class="mb-0">${prod.fecha}</p>
          </div>
        </div>
        <div class="mb-4">
          <p class="text-muted small mb-1 text-uppercase fw-bold" style="font-size:0.7rem;">Resumen / Abstract</p>
          <p class="mb-0 text-muted">Resumen simulado de la producción académica. En un sistema real este campo contendría el abstract completo del documento registrado.</p>
        </div>
        <div class="d-flex align-items-center gap-3 p-3 border rounded bg-light">
          <i class="bi bi-file-earmark-pdf text-danger fs-3"></i>
          <div class="flex-grow-1">
            <p class="fw-medium mb-0 small">documento_produccion_${prod.id}.pdf</p>
            <p class="text-muted mb-0" style="font-size:0.75rem;">Documento adjunto</p>
          </div>
          <a href="#" class="btn btn-primary btn-sm" onclick="simularDescarga(event)">
            <i class="bi bi-download me-1"></i> Descargar PDF
          </a>
        </div>
        ${puedeEliminar ? `
        <div class="d-flex justify-content-end mt-4 pt-3 border-top">
          <button class="btn btn-outline-danger btn-sm" data-bs-toggle="modal" data-bs-target="#modalEliminar">
            <i class="bi bi-trash me-1"></i> Eliminar producción
          </button>
        </div>` : ''}
      </div>
    </div>
  `;
  aplicarRBAC();
});