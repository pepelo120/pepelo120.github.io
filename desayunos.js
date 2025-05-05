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
        "desayuno-7-omelette-espinacas.html"
    ];

    desayunos.forEach((desayuno, index) => {
        setTimeout(() => {
            desayuno.classList.add("visible");
        }, index * 200);

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
