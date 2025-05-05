// Restricción global basada en el horario
const ahora = new Date();
const horas = ahora.getHours();

// Verificar si la hora está entre las 9:00 AM y las 9:00 PM
if (horas < 9 || horas >= 21) {
    document.body.innerHTML = '<h1>Gracias por su preferencia, lo esperamos en horario laboral (9:00 AM - 9:00 PM).</h1>';
    document.body.style.color = 'red'; // Cambiar el color del mensaje a rojo
    document.body.style.textAlign = 'center'; // Centrar el mensaje
    document.body.style.marginTop = '20%'; // Ajustar la posición del mensaje
} else {
    // Declarar precios de pizzas en el nivel global
    const preciosPizzas = {
        'Nada': 0,
        'Mexicana': 100,
        'Pepperoni': 120,
        'Hawaiana': 110
    };

    // Obtener elementos del DOM
    const formulario = document.getElementById('formulario');
    const local = document.getElementById('local');
    const domicilio = document.getElementById('domicilio');
    const metodoPago = document.getElementById('metodo-pago');
    const pagoTarjeta = document.getElementById('pago-tarjeta');

    // Mostrar u ocultar campos de tarjeta según el método de pago
    metodoPago.addEventListener('change', () => {
        pagoTarjeta.style.display = metodoPago.value === 'Tarjeta' ? 'block' : 'none';
    });

    // Función para calcular el total
    const calcularTotal = (pizzas, complementos) => {
        let total = pizzas.reduce((acc, pizza) => acc + preciosPizzas[pizza], 0);
        if (complementos.refresco) total += 30;
        if (complementos.papas) total += 45;
        if (complementos.postre) total += 55;
        if (complementos.ensalada) total += 35;
        return total;
    };

    // Función para guardar datos del pedido en localStorage
    const guardarPedido = (tipo, pizzas, complementos, metodo, total) => {
        localStorage.setItem(`${tipo}-pizza1`, `${pizzas[0]} ($${preciosPizzas[pizzas[0]]})`);
        localStorage.setItem(`${tipo}-pizza2`, `${pizzas[1]} ($${preciosPizzas[pizzas[1]]})`);
        localStorage.setItem(`${tipo}-pizza3`, `${pizzas[2]} ($${preciosPizzas[pizzas[2]]})`);
        localStorage.setItem(`${tipo}-refresco`, complementos.refresco);
        localStorage.setItem(`${tipo}-papas`, complementos.papas);
        localStorage.setItem(`${tipo}-postre`, complementos.postre);
        localStorage.setItem(`${tipo}-ensalada`, complementos.ensalada);
        localStorage.setItem(`${tipo}-metodoPago`, metodo);
        localStorage.setItem(`${tipo}-total`, total);
    };

    // Lógica del botón "Pedido Local"
    local.addEventListener('click', (e) => {
        e.preventDefault();

        // Limpiar datos antiguos
        ['pizza1', 'pizza2', 'pizza3', 'refresco', 'papas', 'postre', 'ensalada', 'metodoPago', 'total'].forEach(item => {
            localStorage.removeItem(`local-${item}`);
        });

        // Obtener datos de entrada
        const pizzas = [
            document.getElementById('pizza1').value,
            document.getElementById('pizza2').value,
            document.getElementById('pizza3').value
        ];
        const complementos = {
            refresco: document.getElementById('refresco').checked,
            papas: document.getElementById('papas').checked,
            postre: document.getElementById('postre').checked,
            ensalada: document.getElementById('ensalada').checked
        };
        const metodo = metodoPago.value;

        // Validación del método de pago
        if (metodo === 'Tarjeta') {
            const numTarjeta = document.getElementById('num-tarjeta').value;
            const fechaExp = document.getElementById('fecha-exp').value;
            const cvv = document.getElementById('cvv').value;

            const tarjetaValida = /^\d{16}$/.test(numTarjeta);
            const fechaValida = /^\d{2}\/\d{2}$/.test(fechaExp);
            const cvvValido = /^\d{3}$/.test(cvv);

            if (!tarjetaValida || !fechaValida || !cvvValido) {
                alert('Por favor, ingresa correctamente los datos de la tarjeta.');
                return;
            }
        }

        // Calcular total y guardar datos
        const total = calcularTotal(pizzas, complementos);
        guardarPedido('local', pizzas, complementos, metodo, total);

        // Redirigir a la página de ticket local
        window.location.href = 'ticket-local.html';
    });

    // Lógica del botón "Pedido a Domicilio"
    domicilio.addEventListener('click', (e) => {
        e.preventDefault();

        // Limpiar datos antiguos
        ['pizza1', 'pizza2', 'pizza3', 'refresco', 'papas', 'postre', 'ensalada', 'metodoPago', 'total'].forEach(item => {
            localStorage.removeItem(`domicilio-${item}`);
        });

        // Obtener datos de entrada
        const pizzas = [
            document.getElementById('pizza1').value,
            document.getElementById('pizza2').value,
            document.getElementById('pizza3').value
        ];
        const complementos = {
            refresco: document.getElementById('refresco').checked,
            papas: document.getElementById('papas').checked,
            postre: document.getElementById('postre').checked,
            ensalada: document.getElementById('ensalada').checked
        };
        const metodo = metodoPago.value;

        // Calcular total y guardar datos
        const total = calcularTotal(pizzas, complementos);
        guardarPedido('domicilio', pizzas, complementos, metodo, total);

        // Redirigir a la página de pedido a domicilio
        window.location.href = 'pagina-domicilio.html';
    });
}