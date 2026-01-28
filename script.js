// VALOR DEL INDICADOR (1 - 100)
// Puedes cambiarlo para probar diferentes resultados
const score = 82;

const circle = document.getElementById("circle");
const valueText = document.getElementById("value");
const message = document.getElementById("message");

valueText.textContent = score;

// 🔴 ROJO (1 - 30)
if (score <= 30) {
  circle.classList.add("red");
  message.textContent = "🔴 Tu marketing digital es deficiente. Debes mejorar la estrategia de contenido y aumentar la presencia en redes sociales.";
  message.style.color = "#c62828";

// 🟡 AMARILLO (31 - 70)
} else if (score <= 70) {
  circle.classList.add("yellow");
  message.textContent = "🟡 Tu marketing digital es aceptable, pero aún puedes optimizar la interacción y el alcance de tu audiencia.";
  message.style.color = "#f9a825";

// 🟢 VERDE (71 - 100)
} else {
  circle.classList.add("green");
  message.textContent = "🟢 Excelente desempeño en marketing digital. Tu estrategia es sólida y genera alto impacto en redes sociales.";
  message.style.color = "#2e7d32";
}
