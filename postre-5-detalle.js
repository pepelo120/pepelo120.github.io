document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Donas Glaseadas cargada correctamente.");

    const postre = document.querySelector(".postre-5-detalle");

    setTimeout(() => {
        postre.style.opacity = "1";
        postre.style.transform = "translateY(0)";
    }, 300);
});
