document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Salmón Glaseado cargada correctamente.");

    const cena = document.querySelector(".cena-7-detalle");

    setTimeout(() => {
        cena.style.opacity = "1";
        cena.style.transform = "translateY(0)";
    }, 300);
});
