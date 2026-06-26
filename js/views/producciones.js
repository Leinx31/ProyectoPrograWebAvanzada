function cargarTablaProducciones() {
  const tbody = document.getElementById('tablaProducciones');
  if (!tbody) return;

  const textoBuscar = document.getElementById('inputBuscar').value.toLowerCase();
  const categoriaFiltrada = document.getElementById('selectCategoria').value;
  const rolActivo = appData.currentRole;

  tbody.innerHTML = '';

  // Filtrado lógico sobre el arreglo simulado
  const resultados = appData.producciones.filter(prod => {
    const coincideTexto = prod.titulo.toLowerCase().includes(textoBuscar) || prod.autor.toLowerCase().includes(textoBuscar);
    const coincideCategoria = categoriaFiltrada === '' || prod.categoria === categoriaFiltrada;
    return coincideTexto && coincideCategoria;
  });

  if (resultados.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">No se encontraron producciones académicas.</td></tr>`;
    return;
  }

  // Generación de las filas de la tabla
  resultados.forEach(prod => {
    // Control de badge de estado usando las variables de estado personalizadas
    let badgeClass = 'bg-secondary';
    if (prod.estado === 'Publicado') badgeClass = 'bg-success';
    if (prod.estado === 'En Revisión') badgeClass = 'bg-warning text-dark';

    // Determinar si el rol actual permite editar o no (RBAC)
    const ocultarAccionesCriticas = (rolActivo === 'Estudiante') ? 'd-none' : '';

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
          <a href="editar.html?id=${prod.id}" class="btn btn-sm btn-outline-secondary ${ocultarAccionesCriticas}" title="Editar">
            <i class="bi bi-pencil"></i>
          </a>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Escuchar eventos en tiempo real
document.addEventListener('DOMContentLoaded', () => {
  const inputBuscar = document.getElementById('inputBuscar');
  const selectCategoria = document.getElementById('selectCategoria');

  if (inputBuscar) inputBuscar.addEventListener('input', cargarTablaProducciones);
  if (selectCategoria) selectCategoria.addEventListener('change', cargarTablaProducciones);

  // Volver a cargar si el usuario cambia el rol desde la barra superior
  document.addEventListener('cambioRol', cargarTablaProducciones);

  // Carga inicial
  cargarTablaProducciones();
});