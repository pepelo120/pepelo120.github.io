document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Sopa de Tomate y Albahaca cargada correctamente.");

    const cena = document.querySelector(".cena-4-detalle");

    setTimeout(() => {
        cena.style.opacity = "1";
        cena.style.transform = "translateY(0)";
    }, 300);
});
