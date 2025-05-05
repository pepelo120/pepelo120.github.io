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
        "postre-7-helado-artesanal.html"
    ];

    postres.forEach((postre, index) => {
        // Aplicar efecto de aparición
        setTimeout(() => {
            postre.classList.add("visible");
        }, index * 200);

        // Asegurar que el clic funciona correctamente
        postre.addEventListener("click", () => {
            const destino = nombresPostres[index];
            if (destino) {
                window.location.href = destino;
            } else {
                console.error("No se encontró la página del postre");
            }
        });
    });
});
