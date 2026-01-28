// FUNCION PARA ACTUALIZAR SCORE
function updateScore() {
  // Obtener valores desde los inputs
  const mentions = parseInt(document.getElementById("mentions").value) || 0;
  const likes = parseInt(document.getElementById("likes").value) || 0;
  const comments = parseInt(document.getElementById("comments").value) || 0;
  const shares = parseInt(document.getElementById("shares").value) || 0;

  // Calcular promedio
  const score = Math.min(Math.round((mentions + likes + comments + shares) / 4), 100);

  const circle = document.getElementById("circle");
  const valueText = document.getElementById("value");
  const message = document.getElementById("message");

  // Actualizar valor del círculo
  valueText.textContent = score;

  // Quitar clases anteriores
  circle.classList.remove("red", "yellow", "green");

  // Asignar color y mensaje según score
  if (score <= 30) {
    circle.classList.add("red");
    message.textContent = "🔴 Tu marketing digital es deficiente. Debes mejorar la estrategia y aumentar la presencia en redes.";
    message.style.color = "#c62828";
  } else if (score <= 70) {
    circle.classList.add("yellow");
    message.textContent = "🟡 Tu marketing digital es aceptable, pero aún puedes optimizar la interacción y el alcance.";
    message.style.color = "#f9a825";
  } else {
    circle.classList.add("green");
    message.textContent = "🟢 Excelente desempeño en marketing digital. Tu estrategia es sólida y genera alto impacto.";
    message.style.color = "#2e7d32";
  }
}

// Ejecutar al cargar la página
updateScore();

// Agregar evento al botón
document.getElementById("updateBtn").addEventListener("click", updateScore);
