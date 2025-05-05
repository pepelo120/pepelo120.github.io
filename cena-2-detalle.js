document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Tacos de Pescado cargada correctamente.");

    const cena = document.querySelector(".cena-2-detalle");

    setTimeout(() => {
        cena.style.opacity = "1";
        cena.style.transform = "translateY(0)";
    }, 300);
});
