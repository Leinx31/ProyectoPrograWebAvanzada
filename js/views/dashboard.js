function inicializarDashboard() {
  // Rellenar indicadores con los datos simulados directos
  document.getElementById('card-total-producciones').innerText = appData.indicadores.totalProducciones;
  
  const cardUsuarios = document.getElementById('card-total-usuarios');
  if (cardUsuarios) {
    cardUsuarios.innerText = appData.indicadores.totalUsuarios;
  }
  
  document.getElementById('card-total-categorias').innerText = appData.indicadores.categoriasActivas;
  document.getElementById('card-total-areas').innerText = appData.investigacionesEnCurso || 12;
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  inicializarDashboard();
});