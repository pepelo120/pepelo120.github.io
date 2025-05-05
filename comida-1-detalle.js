document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Arroz con Pollo cargada correctamente.");

    const comida = document.querySelector(".comida-1-detalle");

    setTimeout(() => {
        comida.style.opacity = "1";
        comida.style.transform = "translateY(0)";
    }, 300);
});
