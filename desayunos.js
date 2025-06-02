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
document.addEventListener("DOMContentLoaded", function () {
    let categoriasBoton = document.getElementById("categorias-toggle");
    let categoriasMenu = document.getElementById("categorias");

    // Ocultar el menú al cargar la página
    categoriasMenu.style.display = "none";

    // Mostrar categorías cuando el cursor está sobre el botón
    categoriasBoton.addEventListener("mouseenter", function () {
        categoriasMenu.style.display = "block";
        categoriasMenu.style.position = "absolute"; 
        categoriasMenu.style.top = categoriasBoton.offsetHeight + "px";
        categoriasMenu.style.left = categoriasBoton.offsetLeft + 15 + "px";
    });

    // Ocultar categorías cuando el cursor sale del menú o del botón
    categoriasBoton.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if (!categoriasMenu.matches(":hover")) {
                categoriasMenu.style.display = "none";
            }
        }, 200);
    });

    categoriasMenu.addEventListener("mouseleave", function () {
        categoriasMenu.style.display = "none";
    });
});

// Buscador funcional
document.getElementById("buscador").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let receta = event.target.value.toLowerCase().trim();
        let paginasRecetas = {
            "desayunos": "desayunos.html",
            "comidas": "comidas.html",
            "cenas": "cenas.html",
            "postres": "postres.html"
        };

        if (paginasRecetas[receta]) {
            window.location.href = paginasRecetas[receta];
        } else {
            alert("Receta no encontrada. Intenta escribir desayunos, comidas, cenas o postres.");
        }
    }
});