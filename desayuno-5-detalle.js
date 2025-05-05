document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Hot Cakes Esponjosos cargada correctamente.");

    const desayuno = document.querySelector(".desayuno-5-detalle");

    setTimeout(() => {
        desayuno.style.opacity = "1";
        desayuno.style.transform = "translateY(0)";
    }, 300);
});
