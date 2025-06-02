document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de postres cargada correctamente.");

    const postres = document.querySelectorAll(".postre");

    if (postres.length === 0) {
        console.error("No se encontraron elementos con la clase .postre");
        return;
    }

    const nombresPostres = [
        "postre-1-pastel-chocolate.html",
        "postre-2-tiramisu.html",
        "postre-3-flan-caramelo.html",
        "postre-4-cheesecake.html",
        "postre-5-donas.html",
        "postre-6-macarons.html",
        "postre-7-helado-artesanal.html",
        "postre-8-tarta-manzana.html",
        "postre-9-brownie-chocolate.html",
        "postre-10-mousse-fresa.html",
        "postre-11-crepas-nutella.html",
        "postre-12-galletas-avena.html",
        "postre-13-flan-coco.html",
        "postre-14-tarta-red-velvet.html",
        "postre-15-helado-vainilla.html",
        "postre-16-churros-chocolate.html",
        "postre-17-milhojas-crema.html",
        "postre-18-cupcakes-zanahoria.html",
        "postre-19-pay-limon.html",
        "postre-20-gelatina-frutos-rojos.html",
        
    ];

    postres.forEach((postre, index) => {
        // Aplicar efecto de aparición con retardo progresivo
        setTimeout(() => {
            postre.classList.add("visible");
        }, index * 200);

        // Asegurar que el clic dirige a la página correcta
        postre.addEventListener("click", () => {
            const destino = nombresPostres[index];
            if (destino) {
                window.location.href = destino;
            } else {
                console.error(`No se encontró la página para el postre en la posición ${index}`);
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