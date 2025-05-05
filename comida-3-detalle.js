document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Carne Asada cargada correctamente.");

    const comida = document.querySelector(".comida-3-detalle");

    setTimeout(() => {
        comida.style.opacity = "1";
        comida.style.transform = "translateY(0)";
    }, 300);
});
