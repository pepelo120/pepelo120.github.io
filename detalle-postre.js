document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de postre cargada correctamente.");

    const postre = document.querySelector(".detalle-postre");

    setTimeout(() => {
        postre.style.opacity = "1";
        postre.style.transform = "translateY(0)";
    }, 300);
});
