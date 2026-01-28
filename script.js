function analizar() {
    let menciones = document.getElementById("menciones").value;
    let likes = document.getElementById("likes").value;
    let comentarios = document.getElementById("comentarios").value;

    let totalInteracciones = Number(likes) + Number(comentarios);

    let tendencia = "";

    if (totalInteracciones > 100) {
        tendencia = "Alta interacción 📈";
    } else {
        tendencia = "Interacción baja 📉";
    }

    document.getElementById("resultado").innerHTML =
        "Total de interacciones: " + totalInteracciones + "<br>" +
        "Tendencia detectada: " + tendencia;
}
