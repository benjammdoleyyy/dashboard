function initializeApp() {
  console.log('QASO System loaded');
}

function showTab(tabName) {
  // Ocultar todos los tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Mostrar tab seleccionado
  document.getElementById(tabName).classList.add('active');
  event.target.classList.add('active');
}

// Funciones vacías para evitar errores
function registrarProducto(e) { e.preventDefault(); alert('Función en desarrollo'); }
function loadDashboard() { alert('Función en desarrollo'); }
function mostrarStock() { alert('Función en desarrollo'); }
function registrarMovimiento(e) { e.preventDefault(); alert('Función en desarrollo'); }
function buscarProducto() { alert('Función en desarrollo'); }
// ... más funciones básicas