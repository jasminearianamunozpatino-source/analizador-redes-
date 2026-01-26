document.getElementById('metrics-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita recargar la página

    const red = document.getElementById('red').value;
    const menciones = parseInt(document.getElementById('menciones').value);
    const interacciones = parseInt(document.getElementById('interacciones').value);

    // Guardar datos en un array
    let datos = JSON.parse(localStorage.getItem('datos')) || [];
    datos.push({ red, menciones, interacciones });
    localStorage.setItem('datos', JSON.stringify(datos));

    mostrarResultados();
});

function mostrarResultados() {
    const datos = JSON.parse(localStorage.getItem('datos')) || [];
    const chartsDiv = document.getElementById('charts');
    chartsDiv.innerHTML = '';

    datos.forEach(dato => {
        const p = document.createElement('p');
        p.textContent = `Red: ${dato.red} | Menciones: ${dato.menciones} | Interacciones: ${dato.interacciones}`;
        chartsDiv.appendChild(p);
    });
}

// Mostrar resultados al cargar la página
mostrarResultados();
