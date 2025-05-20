document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de comidas cargada correctamente.");

    const comidas = document.querySelectorAll(".comida");

    if (comidas.length === 0) {
        console.error("No se encontraron elementos con la clase .comida");
        return;
    }

    const nombresComidas = [
        "comida-1-arroz-pollo.html",
        "comida-2-pescado-veracruzana.html",
        "comida-3-carne-asada.html",
        "comida-4-pasta-carbonara.html",
        "comida-5-sopa-lentejas.html",
        "comida-6-ensalada-cesar.html",
        "comida-7-tacos-pastor.html",
        "comida-8-estofado-de-ternera.html",
        "comida-9-lomo-de-cerdo-al-horno.html",
        "comida-10-canelones-de-espinaca.html",
        "comida-11-salmon-en-salsa-de-eneldo.html",
        "comida-12-codorniz-asada.html",
        "comida-13-arroz-negro-con-calamares.html",
        "comida-14-rabo-de-toro.html",
        "comida-15-pollo-asado-con-hierbas.html",
        "comida-16-garbanzos-con-espinacas.html",
        "comida-17-milanesa-napolitana.html",
        "comida-18-filete-de-res-con-pure-de-boniato.html",
        "comida-19-cordero-al-horno-con-romero.html",
        "comida-20-merluza-en-salsa-verde.html"
    ];

    comidas.forEach((comida, index) => {
        // Efecto de aparición progresivo
        setTimeout(() => {
            comida.classList.add("visible");
        }, index * 200);

        // Efecto de escala al pasar el mouse
        comida.addEventListener("mouseover", () => {
            comida.style.transform = "scale(1.05)";
            comida.style.transition = "transform 0.3s ease-in-out";
        });

        comida.addEventListener("mouseout", () => {
            comida.style.transform = "scale(1)";
        });

        // Hacer que cada comida sea clickeable
        comida.addEventListener("click", () => {
            if (index < nombresComidas.length) {
                window.location.href = nombresComidas[index];
            } else {
                console.error(`No se encontró la página de la comida en la posición ${index}`);
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
