document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Hamburguesas Caseras cargada correctamente.");

    const cena = document.querySelector(".cena-3-detalle");

    setTimeout(() => {
        cena.style.opacity = "1";
        cena.style.transform = "translateY(0)";
    }, 300);
});
