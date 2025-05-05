function crearBoton(texto, color, destino) {
    const boton = document.createElement("button");
    boton.textContent = texto;

    // Aplicar estilos similares a los botones existentes
    boton.style.fontSize = "24px"; // Botones más grandes
    boton.style.padding = "20px 40px";
    boton.style.cursor = "pointer";
    boton.style.border = "3px solid white";
    boton.style.borderRadius = "50px";
    boton.style.backgroundColor = color; // Color personalizado
    boton.style.color = "white";
    boton.style.fontWeight = "bold";
    boton.style.boxShadow = "0px 5px 15px rgba(255, 69, 0, 0.5)";
    boton.style.transition = "background 0.3s ease, transform 0.2s ease";
    boton.style.width = "300px"; // Tamaño uniforme

    // Efecto de presionar el botón
    boton.addEventListener("mousedown", () => {
        boton.style.transform = "scale(0.9)";
        boton.style.boxShadow = "0px 2px 5px rgba(255, 69, 0, 0.3)";
    });

    boton.addEventListener("mouseup", () => {
        boton.style.transform = "scale(1)";
        boton.style.boxShadow = "0px 5px 15px rgba(255, 69, 0, 0.5)";
    });

    // Cambiar color al pasar el cursor
    boton.addEventListener("mouseover", () => {
        boton.style.backgroundColor = darkenColor(color, 20);
    });

    boton.addEventListener("mouseout", () => {
        boton.style.backgroundColor = color;
    });

    // Agregar evento de clic para redirigir a la página correspondiente
    boton.addEventListener("click", function () {
        window.location.href = destino;
    });

    return boton;
}

// Función para oscurecer el color del botón al pasar el cursor
function darkenColor(color, percent) {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const r = (num >> 16) - amt;
    const g = ((num >> 8) & 0x00FF) - amt;
    const b = (num & 0x0000FF) - amt;
    return `#${(0x1000000 + (r < 0 ? 0 : r) * 0x10000 + (g < 0 ? 0 : g) * 0x100 + (b < 0 ? 0 : b)).toString(16).slice(1)}`;
}

// Crear y agregar los botones al contenedor de botones
const contenedorBotones = document.createElement("div");
contenedorBotones.id = "contenedor-botones";
document.body.appendChild(contenedorBotones);

contenedorBotones.appendChild(crearBoton("Ir a la Pizzería 🍕", "#ff4500", "pizzeria.html"));
contenedorBotones.appendChild(crearBoton("Ver Recetas de comida 🍽️", "#cc3700", "recetas.html")); // Rojo oscuro
