document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de cenas cargada correctamente.");

    const cenas = document.querySelectorAll(".cena");

    if (cenas.length === 0) {
        console.error("No se encontraron elementos con la clase .cena");
        return;
    }

    const nombresCenas = [
        "cena-1-pasta-alfredo.html",
        "cena-2-tacos-pescado.html",
        "cena-3-hamburguesas.html",
        "cena-4-sopa-tomate.html",
        "cena-5-enchiladas.html",
        "cena-6-pizza-vegetales.html",
        "cena-7-salmon-miel.html"
    ];

    cenas.forEach((cena, index) => {
        // Aplicar efecto de aparición
        setTimeout(() => {
            cena.classList.add("visible");
        }, index * 200);

        // Redirección a la receta correspondiente
        cena.addEventListener("click", () => {
            const destino = nombresCenas[index];
            if (destino) {
                window.location.href = destino;
            } else {
                console.error("No se encontró la página de la cena");
            }
        });
    });
});
