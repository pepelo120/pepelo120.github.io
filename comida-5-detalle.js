document.addEventListener("DOMContentLoaded", () => {
    console.log("Página de Sopa de Lentejas cargada correctamente.");

    const comida = document.querySelector(".comida-5-detalle");

    setTimeout(() => {
        comida.style.opacity = "1";
        comida.style.transform = "translateY(0)";
    }, 300);
});
