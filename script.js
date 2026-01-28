function analizar() {
    let menciones = Number(document.getElementById("menciones").value);
    let likes = Number(document.getElementById("likes").value);
    let comentarios = Number(document.getElementById("comentarios").value);

    let total = likes + comentarios;
    let porcentaje = Math.min((total / 200) * 100, 100);

    document.getElementById("resultado").innerHTML =
        "<b>Menciones:</b> " + menciones + "<br>" +
        "<b>Total de interacciones:</b> " + total;

    let circulo = document.getElementById("circulo");
    circulo.style.background =
        `conic-gradient(#2ecc71 ${porcentaje}%, #ecf0f1 ${porcentaje}%)`;

    circulo.innerHTML = Math.round(porcentaje) + "%";
}
