document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Pasta Alfredo cargada correctamente.");

    const cena = document.querySelector(".cena-1-detalle");

    setTimeout(() => {
        cena.style.opacity = "1";
        cena.style.transform = "translateY(0)";
    }, 300);
});
