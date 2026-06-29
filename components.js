function inicializarDashboard() {
  document.getElementById('card-total-producciones').innerText = appData.indicadores.totalProducciones;
  const cardUsuarios = document.getElementById('card-total-usuarios');
  if (cardUsuarios) {
    cardUsuarios.innerText = appData.indicadores.totalUsuarios;
  }
  document.getElementById('card-total-categorias').innerText = appData.indicadores.categoriasActivas;
  document.getElementById('card-total-areas').innerText = appData.investigacionesEnCurso || 12;
}
document.addEventListener('DOMContentLoaded', () => {
  inicializarDashboard();
});