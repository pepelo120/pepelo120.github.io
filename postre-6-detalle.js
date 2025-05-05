document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Macarons cargada correctamente.");

    const postre = document.querySelector(".postre-6-detalle");

    setTimeout(() => {
        postre.style.opacity = "1";
        postre.style.transform = "translateY(0)";
    }, 300);
});
