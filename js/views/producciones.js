const ITEMS_POR_PAGINA = 5;
let paginaActual = 1;
let resultadosFiltrados = [];
function cargarTablaProducciones() {
  const tbody = document.getElementById('tablaProducciones');
  if (!tbody) return;
  const textoBuscar = document.getElementById('inputBuscar').value.toLowerCase();
  const categoriaFiltrada = document.getElementById('selectCategoria').value;
  const estadoFiltrado = document.getElementById('selectEstado') ? document.getElementById('selectEstado').value : '';
  const rolActivo = appData.currentRole;
  resultadosFiltrados = appData.producciones.filter(prod => {
    const coincideTexto = prod.titulo.toLowerCase().includes(textoBuscar) || prod.autor.toLowerCase().includes(textoBuscar);
    const coincideCategoria = categoriaFiltrada === '' || prod.categoria === categoriaFiltrada;
    const coincideEstado = estadoFiltrado === '' || prod.estado === estadoFiltrado;
    return coincideTexto && coincideCategoria && coincideEstado;
  });
  paginaActual = 1;
  renderizarPagina(rolActivo);
  renderizarPaginacion();
}
function renderizarPagina(rolActivo) {
  const tbody = document.getElementById('tablaProducciones');
  tbody.innerHTML = '';
  const inicio = (paginaActual - 1) * ITEMS_POR_PAGINA;
  const fin = inicio + ITEMS_POR_PAGINA;
  const pagina = resultadosFiltrados.slice(inicio, fin);
  if (pagina.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">No se encontraron producciones académicas.</td></tr>`;
    actualizarContador(0, 0);
    return;
  }
  pagina.forEach(prod => {
    let badgeClass = 'bg-secondary';
    if (prod.estado === 'Publicado') badgeClass = 'bg-success';
    if (prod.estado === 'En Revisión') badgeClass = 'bg-warning text-dark';
    const ocultarEditar = (rolActivo === 'Estudiante') ? 'd-none' : '';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="fw-medium text-dark">${prod.titulo}</span></td>
      <td class="text-muted">${prod.autor}</td>
      <td><span class="badge bg-light text-dark border">${prod.categoria}</span></td>
      <td class="text-muted">${prod.fecha}</td>
      <td><span class="badge ${badgeClass}">${prod.estado}</span></td>
      <td class="text-end">
        <div class="btn-group">
          <a href="detalle.html?id=${prod.id}" class="btn btn-sm btn-outline-secondary" title="Ver detalles">
            <i class="bi bi-eye"></i>
          </a>
          <a href="editar.html?id=${prod.id}" class="btn btn-sm btn-outline-secondary ${ocultarEditar}" title="Editar">
            <i class="bi bi-pencil"></i>
          </a>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
  actualizarContador(inicio + 1, Math.min(fin, resultadosFiltrados.length));
}
function actualizarContador(desde, hasta) {
  const span = document.getElementById('contadorResultados');
  if (span) {
    span.textContent = resultadosFiltrados.length === 0
      ? 'Sin resultados'
      : `Mostrando ${desde}–${hasta} de ${resultadosFiltrados.length} registros`;
  }
}
function renderizarPaginacion() {
  const nav = document.getElementById('paginacionNav');
  if (!nav) return;
  const totalPaginas = Math.ceil(resultadosFiltrados.length / ITEMS_POR_PAGINA);
  nav.innerHTML = '';
  const liAnterior = document.createElement('li');
  liAnterior.className = `page-item ${paginaActual === 1 ? 'disabled' : ''}`;
  liAnterior.innerHTML = `<a class="page-link" href="#">Anterior</a>`;
  liAnterior.addEventListener('click', e => {
    e.preventDefault();
    if (paginaActual > 1) { paginaActual--; renderizarPagina(appData.currentRole); renderizarPaginacion(); }
  });
  nav.appendChild(liAnterior);
  for (let i = 1; i <= totalPaginas; i++) {
    const li = document.createElement('li');
    li.className = `page-item ${i === paginaActual ? 'active' : ''}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener('click', e => {
      e.preventDefault();
      paginaActual = i;
      renderizarPagina(appData.currentRole);
      renderizarPaginacion();
    });
    nav.appendChild(li);
  }
  const liSiguiente = document.createElement('li');
  liSiguiente.className = `page-item ${paginaActual === totalPaginas || totalPaginas === 0 ? 'disabled' : ''}`;
  liSiguiente.innerHTML = `<a class="page-link" href="#">Siguiente</a>`;
  liSiguiente.addEventListener('click', e => {
    e.preventDefault();
    if (paginaActual < totalPaginas) { paginaActual++; renderizarPagina(appData.currentRole); renderizarPaginacion(); }
  });
  nav.appendChild(liSiguiente);
}
document.addEventListener('DOMContentLoaded', () => {
  const inputBuscar = document.getElementById('inputBuscar');
  const selectCategoria = document.getElementById('selectCategoria');
  const selectEstado = document.getElementById('selectEstado');
  if (inputBuscar) inputBuscar.addEventListener('input', cargarTablaProducciones);
  if (selectCategoria) selectCategoria.addEventListener('change', cargarTablaProducciones);
  if (selectEstado) selectEstado.addEventListener('change', cargarTablaProducciones);
  document.addEventListener('cambioRol', () => {
    renderizarPagina(appData.currentRole);
  });
  cargarTablaProducciones();
});