document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Pasta Carbonara cargada correctamente.");

    const comida = document.querySelector(".comida-4-detalle");

    setTimeout(() => {
        comida.style.opacity = "1";
        comida.style.transform = "translateY(0)";
    }, 300);
});
