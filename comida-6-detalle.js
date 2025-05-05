document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Ensalada César cargada correctamente.");

    const comida = document.querySelector(".comida-6-detalle");

    setTimeout(() => {
        comida.style.opacity = "1";
        comida.style.transform = "translateY(0)";
    }, 300);
});
