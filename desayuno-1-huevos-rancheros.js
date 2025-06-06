// Esperar a que el contenido de la página esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    console.log("Página de Huevos Rancheros cargada correctamente.");

    // Animación de aparición para el detalle del desayuno
    const desayuno = document.querySelector(".desayuno-1-detalle");
    setTimeout(() => {
        desayuno.style.opacity = "1";
        desayuno.style.transform = "translateY(0)";
    }, 300);
});

// Función para descargar la receta en un archivo .txt
document.getElementById("descargar-receta").addEventListener("click", function () {
    const recetaTexto = `
Huevos Rancheros 🍳🌮

Ingredientes:
- 2 huevos
- 2 tortillas de maíz
- 2 tomates picados
- ½ cebolla picada
- 1 diente de ajo picado
- 1 chile serrano picado (opcional)
- Sal y pimienta al gusto
- 1 cucharada de aceite de oliva
- Frijoles refritos para acompañar
- Queso fresco y cilantro picado para decorar

Preparación:
1. Calienta el aceite en una sartén y sofríe la cebolla, el ajo y el chile serrano.
2. Agrega los tomates y cocina a fuego medio hasta obtener una salsa espesa.
3. Sazona con sal y pimienta y reserva.
4. Fríe ligeramente las tortillas para que estén crujientes.
5. Cocina los huevos fritos en la misma sartén hasta que las claras estén firmes.
6. Coloca cada huevo sobre una tortilla y cubre con la salsa ranchera.
7. Decora con queso fresco y cilantro picado.
8. Acompaña con frijoles refritos y disfruta tu desayuno ranchero. 🍳🌮

¡Buen provecho!
`;

    const blob = new Blob([recetaTexto], { type: "text/plain" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = "receta_huevos_rancheros.txt";

    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
});

// Menú desplegable de categorías
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


