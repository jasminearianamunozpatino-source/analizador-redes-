// OBTENER VALORES DE LA TABLA
const mentions = parseInt(document.getElementById("mentions").textContent);
const likes = parseInt(document.getElementById("likes").textContent);
const comments = parseInt(document.getElementById("comments").textContent);
const shares = parseInt(document.getElementById("shares").textContent);

// CALCULAR SCORE PROMEDIO
const score = Math.min(
  Math.round((mentions + likes + comments + shares) / 4),
  100
);

const circle = document.getElementById("circle");
const valueText = document.getElementById("value");
const message = document.getElementById("message");

valueText.textContent = score;

// ASIGNAR COLOR Y MENSAJE SEGÚN SCORE
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
