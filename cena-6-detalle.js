document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Pizza Artesanal cargada correctamente.");

    const cena = document.querySelector(".cena-6-detalle");

    setTimeout(() => {
        cena.style.opacity = "1";
        cena.style.transform = "translateY(0)";
    }, 300);
});
