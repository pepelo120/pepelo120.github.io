document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Pescado a la Veracruzana cargada correctamente.");

    const comida = document.querySelector(".comida-2-detalle");

    setTimeout(() => {
        comida.style.opacity = "1";
        comida.style.transform = "translateY(0)";
    }, 300);
});
