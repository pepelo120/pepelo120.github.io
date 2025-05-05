document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Helado Artesanal cargada correctamente.");

    const postre = document.querySelector(".postre-7-detalle");

    setTimeout(() => {
        postre.style.opacity = "1";
        postre.style.transform = "translateY(0)";
    }, 300);
});
