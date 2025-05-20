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
        "cena-7-salmon-miel.html",
        "cena-8-canelones-jamon-pate.html",
        "cena-9-mejillones-curry.html",
        "cena-10-tarta-calabacin-cebolla.html",
        "cena-11-tabla-quesos-embutidos.html",
        "cena-12-gildas-caseras.html",
        "cena-13-hummus-aguacate.html",
        "cena-14-guacamole-totopos.html",
        "cena-15-hamburguesa-pollo-bacon-huevo.html",
        "cena-16-pizza-coliflor.html",
        "cena-17-quesadillas-variadas.html",
        "cena-18-ensalada-germinados.html",
        "cena-19-mini-hamburguesas-gourmet.html",
        "cena-20-tacos-gambas.html"
    ];

    cenas.forEach((cena, index) => {
        // Efecto de aparición progresivo
        setTimeout(() => {
            cena.classList.add("visible");
        }, index * 200);

        // Efecto de escala al pasar el mouse
        cena.addEventListener("mouseover", () => {
            cena.style.transform = "scale(1.05)";
            cena.style.transition = "transform 0.3s ease-in-out";
        });

        cena.addEventListener("mouseout", () => {
            cena.style.transform = "scale(1)";
        });

        // Hacer que cada cena sea clickeable
        cena.addEventListener("click", () => {
            const destino = nombresCenas[index];
            if (destino) {
                window.location.href = destino;
            } else {
                console.error(`No se encontró la página de la cena en la posición ${index}`);
            }
        });
    });

    // Animación de entrada para listas de ingredientes y pasos
    const listas = document.querySelectorAll("ul, ol");

    listas.forEach((lista) => {
        lista.style.opacity = "0";
        setTimeout(() => {
            lista.style.transition = "opacity 1s ease-in-out";
            lista.style.opacity = "1";
        }, 500);
    });
});
