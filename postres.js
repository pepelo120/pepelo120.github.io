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
        "postre-20-gelatina-frutos-rojos.html"
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
