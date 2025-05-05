document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Enchiladas de Pollo cargada correctamente.");

    const cena = document.querySelector(".cena-5-detalle");

    setTimeout(() => {
        cena.style.opacity = "1";
        cena.style.transform = "translateY(0)";
    }, 300);
});
