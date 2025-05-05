document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Tostadas con Aguacate y Huevo cargada correctamente.");

    const desayuno = document.querySelector(".desayuno-4-detalle");

    setTimeout(() => {
        desayuno.style.opacity = "1";
        desayuno.style.transform = "translateY(0)";
    }, 300);
});
