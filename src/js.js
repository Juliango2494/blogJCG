// Validación de formulario y almacenamiento en Local Storage
const form = document.getElementById('comentarios-form');
const mensajeExito = document.getElementById('mensaje-exito');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre && email && mensaje) {
    localStorage.setItem('comentario', JSON.stringify({ nombre, email, mensaje }));
    mensajeExito.textContent = '¡Comentario enviado con éxito!';
    mensajeExito.style.color = 'green';
    form.reset();
  } else {
    mensajeExito.textContent = 'Por favor, completa todos los campos.';
    mensajeExito.style.color = 'red';
  }
});

// Contador de visitas
const verEstadisticasBtn = document.getElementById('ver-estadisticas');
const contadorDiv = document.getElementById('contador');

let contador = localStorage.getItem('clickCount') || 0;
contadorDiv.textContent = `Botón presionado: ${contador} veces`;

verEstadisticasBtn.addEventListener('click', () => {
  contador++;
  localStorage.setItem('clickCount', contador);
  contadorDiv.textContent = `Botón presionado: ${contador} veces`;
});
