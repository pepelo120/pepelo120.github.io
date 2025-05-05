document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Batido de Plátano y Almendras cargada correctamente.");

    const desayuno = document.querySelector(".desayuno-6-detalle");

    setTimeout(() => {
        desayuno.style.opacity = "1";
        desayuno.style.transform = "translateY(0)";
    }, 300);
});
