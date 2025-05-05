document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Chilaquiles Verdes cargada correctamente.");

    const desayuno = document.querySelector(".desayuno-3-detalle");

    setTimeout(() => {
        desayuno.style.opacity = "1";
        desayuno.style.transform = "translateY(0)";
    }, 300);
});
