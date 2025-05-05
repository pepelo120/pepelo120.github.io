document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Flan de Caramelo cargada correctamente.");

    const postre = document.querySelector(".postre-3-detalle");

    setTimeout(() => {
        postre.style.opacity = "1";
        postre.style.transform = "translateY(0)";
    }, 300);
});
