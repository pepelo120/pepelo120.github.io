document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Tacos al Pastor cargada correctamente.");

    const comida = document.querySelector(".comida-7-detalle");

    setTimeout(() => {
        comida.style.opacity = "1";
        comida.style.transform = "translateY(0)";
    }, 300);
});
