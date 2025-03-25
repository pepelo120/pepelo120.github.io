const formularioDomicilio = document.getElementById('formulario-domicilio');
const enviar = document.getElementById('enviar');
const confirmacion = document.getElementById('confirmacion');

enviar.addEventListener('click', (e) => {
    e.preventDefault();

    // Limpiar datos antiguos de domicilio
    localStorage.removeItem('nombre');
    localStorage.removeItem('telefono');
    localStorage.removeItem('direccion');
    localStorage.removeItem('calle');
    localStorage.removeItem('colonia');
    localStorage.removeItem('municipio');
    localStorage.removeItem('estado');

    // Obtener los valores ingresados
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const calle = document.getElementById('calle').value;
    const colonia = document.getElementById('colonia').value;
    const municipio = document.getElementById('municipio').value;
    const estado = document.getElementById('estado').value;

    // Verificar los campos requeridos
    if (nombre && telefono && direccion && calle && colonia && municipio && estado) {
        // Guardar los datos en localStorage
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('telefono', telefono);
        localStorage.setItem('direccion', direccion);
        localStorage.setItem('calle', calle);
        localStorage.setItem('colonia', colonia);
        localStorage.setItem('municipio', municipio);
        localStorage.setItem('estado', estado);

        // Redirigir al ticket-domicilio.html
        window.location.href = 'ticket-domicilio.html';
    } else {
        confirmacion.textContent = 'Por favor, completa toda la información requerida.';
        confirmacion.style.color = 'red'; // Cambiar el color del mensaje a rojo
    }
});