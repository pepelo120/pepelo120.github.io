document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de desayunos cargada correctamente.");

    const desayunos = document.querySelectorAll(".desayuno");

    const nombresDesayunos = [
        "desayuno-1-huevos-rancheros.html",
        "desayuno-2-avena-frutas.html",
        "desayuno-3-chilaquiles-verdes.html",
        "desayuno-4-tostadas-aguacate.html",
        "desayuno-5-hotcakes.html",
        "desayuno-6-batido-platano.html",
        "desayuno-7-omelette-espinacas.html",
        "desayuno-8-molletes-mexicanos.html",
        "desayuno-9-huevo-revuelto-jamon.html",
        "desayuno-10-pan-frances-miel.html",
        "desayuno-11-bowl-queso-cottage.html",
        "desayuno-12-wrap-huevo-espinaca.html",
        "desayuno-13-licuado-avena-cafe.html",
        "desayuno-14-tortilla-papas-espanola.html",
        "desayuno-15-bagel-salmon-queso.html",
        "desayuno-16-hotcakes-avena-platano.html",
        "desayuno-17-huevo-cocido-aguacate.html",
        "desayuno-18-muffin-integral-huevo.html",
        "desayuno-19-sandwich-queso-huevo.html",
        "desayuno-20-tazon-yogur-granola.html"
    ];

    desayunos.forEach((desayuno, index) => {
        // Efecto para mostrar cada desayuno con retraso
        setTimeout(() => {
            desayuno.classList.add("visible");
        }, index * 200);

        // Redirigir al hacer click en el desayuno
        desayuno.addEventListener("click", () => {
            const destino = nombresDesayunos[index];
            if (destino) {
                window.location.href = destino;
            } else {
                console.error("No se encontró la página del desayuno");
            }
        });
    });
});
