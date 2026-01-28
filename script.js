// Función para actualizar resultado
function actualizarResultado() {
  // Obtener valores de inputs
  const menciones = parseInt(document.getElementById("menciones").value) || 0;
  const megustas = parseInt(document.getElementById("megustas").value) || 0;
  const comentarios = parseInt(document.getElementById("comentarios").value) || 0;
  const compartidos = parseInt(document.getElementById("compartidos").value) || 0;

  // Calcular promedio
  const promedio = Math.round((menciones + megustas + comentarios + compartidos) / 4);

  const circle = document.getElementById("circle");
  const valor = document.getElementById("valor");
  const mensaje = document.getElementById("mensaje");

  // Mostrar valor
  valor.textContent = promedio;

  // Quitar colores anteriores
  circle.classList.remove("red", "yellow", "green");

  // Asignar color y mensaje según promedio
  if (promedio <= 30) {
    circle.classList.add("red");
    mensaje.textContent = "🔴 Tu marketing digital es deficiente. Debes mejorar la estrategia y aumentar la presencia en redes.";
  } else if (promedio <= 70) {
    circle.classList.add("yellow");
    mensaje.textContent = "🟡 Tu marketing digital es aceptable, pero aún puedes optimizar la interacción y el alcance.";
  } else {
    circle.classList.add("green");
    mensaje.textContent = "🟢 Excelente desempeño en marketing digital. Tu estrategia es sólida y genera alto impacto.";
  }
}

// Ejecutar al cargar la página
actualizarResultado();

// Botón actualizar
document.getElementById("actualizarBtn").addEventListener("click", actualizarResultado);
