document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de comidas cargada correctamente.");

    const comidas = document.querySelectorAll(".comida");

    if (comidas.length === 0) {
        console.error("No se encontraron elementos con la clase .comida");
        return;
    }

    const nombresComidas = [
        "comida-1-arroz-pollo.html",
        "comida-2-pescado-veracruzana.html",
        "comida-3-carne-asada.html",
        "comida-4-pasta-carbonara.html",
        "comida-5-sopa-lentejas.html",
        "comida-6-ensalada-cesar.html",
        "comida-7-tacos-pastor.html"
    ];

    comidas.forEach((comida, index) => {
        setTimeout(() => {
            comida.classList.add("visible");
        }, index * 200);

        comida.addEventListener("click", () => {
            const destino = nombresComidas[index];
            if (destino) {
                window.location.href = destino;
            } else {
                console.error("No se encontró la página de la comida");
            }
        });
    });
});
