document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Cheesecake cargada correctamente.");

    const postre = document.querySelector(".postre-4-detalle");

    setTimeout(() => {
        postre.style.opacity = "1";
        postre.style.transform = "translateY(0)";
    }, 300);
});
