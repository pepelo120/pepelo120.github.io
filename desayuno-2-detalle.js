document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Avena con Frutas cargada correctamente.");

    const desayuno = document.querySelector(".desayuno-2-detalle");

    setTimeout(() => {
        desayuno.style.opacity = "1";
        desayuno.style.transform = "translateY(0)";
    }, 300);
});
