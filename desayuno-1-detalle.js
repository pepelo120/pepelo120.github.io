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

dodocument.addEventListener("DOMContentLoaded", () => {
    const { jsPDF } = window.jspdf;
    const botonDescarga = document.getElementById("descargar-receta-final");

    if (botonDescarga) {
        botonDescarga.addEventListener("click", () => {
            console.log("Generando PDF...");

            const doc = new jsPDF();
            doc.setFont("helvetica", "bold");
            doc.setFontSize(20);
            doc.text("Huevos Rancheros 🍳🌮", 20, 20);

            doc.setFontSize(14);
            doc.text("Ingredientes:", 20, 30);
            doc.setFont("helvetica", "normal");
            doc.text("- 2 huevos", 20, 40);
            doc.text("- 2 tortillas de maíz", 20, 50);
            doc.text("- 2 tomates picados", 20, 60);
            doc.text("- ½ cebolla picada", 20, 70);
            doc.text("- 1 diente de ajo picado", 20, 80);
            doc.text("- 1 chile serrano picado (opcional)", 20, 90);
            doc.text("- Sal y pimienta al gusto", 20, 100);
            doc.text("- 1 cucharada de aceite de oliva", 20, 110);
            doc.text("- Frijoles refritos para acompañar", 20, 120);
            doc.text("- Queso fresco y cilantro picado para decorar", 20, 130);

            doc.setFont("helvetica", "bold");
            doc.text("Preparación:", 20, 150);
            doc.setFont("helvetica", "normal");
            let pasos = [
                "1. Calienta el aceite en una sartén y sofríe la cebolla, el ajo y el chile serrano.",
                "2. Agrega los tomates y cocina a fuego medio hasta obtener una salsa espesa.",
                "3. Sazona con sal y pimienta y reserva.",
                "4. Fríe ligeramente las tortillas para que estén crujientes.",
                "5. Cocina los huevos fritos en la misma sartén hasta que las claras estén firmes.",
                "6. Coloca cada huevo sobre una tortilla y cubre con la salsa ranchera.",
                "7. Decora con queso fresco y cilantro picado.",
                "8. Acompaña con frijoles refritos y disfruta tu desayuno ranchero. 🍳🌮"
            ];

            let y = 160;
            pasos.forEach((paso) => {
                doc.text(paso, 20, y);
                y += 10;
            });

            doc.save("receta_huevos_rancheros.pdf");
        });
    } else {
        console.error("Error: El botón de descarga no se encontró.");
    }
});
