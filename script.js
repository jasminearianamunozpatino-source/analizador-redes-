function actualizarResultado() {
  // Obtener valores de inputs
  const menciones = parseInt(document.getElementById("menciones").value) || 0;
  const megustas = parseInt(document.getElementById("megustas").value) || 0;
  const comentarios = parseInt(document.getElementById("comentarios").value) || 0;
  const compartidos = parseInt(document.getElementById("compartidos").value) || 0;

  // Primer círculo: promedio simple
  const promedio = Math.round((menciones + megustas + comentarios + compartidos) / 4);
  const circleScore = document.getElementById("circleScore");
  const valorScore = document.getElementById("valorScore");
  const mensajeScore = document.getElementById("mensajeScore");

  valorScore.textContent = promedio;
  circleScore.classList.remove("red", "yellow", "green");

  if (promedio <= 30) {
    circleScore.classList.add("red");
    mensajeScore.textContent = "🔴 Marketing deficiente. Mejora tu presencia en redes y genera contenido atractivo.";
  } else if (promedio <= 70) {
    circleScore.classList.add("yellow");
    mensajeScore.textContent = "🟡 Marketing aceptable. Optimiza la interacción y la estrategia de contenidos.";
  } else {
    circleScore.classList.add("green");
    mensajeScore.textContent = "🟢 Excelente marketing. Tu estrategia es sólida y efectiva.";
  }

  // Segundo círculo: porcentaje de efectividad (100 puntos máximo posible = 100)
  // Suponemos que cada métrica puede llegar hasta 25 para total 100
  const total = menciones + megustas + comentarios + compartidos;
  const porcentaje = Math.min(Math.round((total / 100) * 100), 100);
  const circlePercent = document.getElementById("circlePercent");
  const valorPercent = document.getElementById("valorPercent");
  const mensajePercent = document.getElementById("mensajePercent");

  valorPercent.textContent = porcentaje + "%";
  circlePercent.classList.remove("red", "yellow", "green");

  if (porcentaje <= 30) {
    circlePercent.classList.add("red");
    mensajePercent.textContent = "🔴 Tu marketing no es efectivo. Consejos: publica contenido relevante, interactúa con tu audiencia y revisa tus objetivos.";
  } else if (porcentaje <= 70) {
    circlePercent.classList.add("yellow");
    mensajePercent.textContent = "🟡 Marketing moderadamente efectivo. Consejos: analiza tus métricas, ajusta tu contenido y mantén consistencia en tus publicaciones.";
  } else {
    circlePercent.classList.add("green");
    mensajePercent.textContent = "🟢 ¡Excelente! Tu marketing está funcionando muy bien. Mantén la consistencia y sigue innovando en tu contenido.";
  }
}

// Ejecutar al cargar la página
actualizarResultado();

// Botón para actualizar
document.getElementById("actualizarBtn").addEventListener("click", actualizarResultado);
