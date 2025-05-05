document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll("#botones-categorias button");

    botones.forEach((boton, index) => {
        setTimeout(() => {
            boton.style.opacity = "1";
            boton.style.transform = "translateY(0)";
        }, index * 200); // Cada botón aparece en secuencia
    });
});
