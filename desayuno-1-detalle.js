document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Huevos Rancheros cargada correctamente.");

    const desayuno = document.querySelector(".desayuno-1-detalle");

    setTimeout(() => {
        desayuno.style.opacity = "1";
        desayuno.style.transform = "translateY(0)";
    }, 300);
});
