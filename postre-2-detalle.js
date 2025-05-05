document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Tiramisú cargada correctamente.");

    const postre = document.querySelector(".postre-2-detalle");

    setTimeout(() => {
        postre.style.opacity = "1";
        postre.style.transform = "translateY(0)";
    }, 300);
});
