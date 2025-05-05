document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Omelette de Espinacas y Queso cargada correctamente.");

    const desayuno = document.querySelector(".desayuno-7-detalle");

    setTimeout(() => {
        desayuno.style.opacity = "1";
        desayuno.style.transform = "translateY(0)";
    }, 300);
});
