document.addEventListener("DOMContentLoaded", function () {
    const doc = new window.jspdf.jsPDF();

    // Recuperar datos desde localStorage
    const pizza1 = localStorage.getItem('local-pizza1') || "No seleccionada";
    const pizza2 = localStorage.getItem('local-pizza2') || "No seleccionada";
    const pizza3 = localStorage.getItem('local-pizza3') || "No seleccionada";

    const refresco = localStorage.getItem('local-refresco') === "true" ? "$30" : "No seleccionado";
    const papas = localStorage.getItem('local-papas') === "true" ? "$45" : "No seleccionado";
    const postre = localStorage.getItem('local-postre') === "true" ? "$55" : "No seleccionado";
    const ensalada = localStorage.getItem('local-ensalada') === "true" ? "$35" : "No seleccionado";

    const metodoPago = localStorage.getItem('local-metodoPago') || "Sin especificar";
    const total = localStorage.getItem('local-total') || "$0";

    // Estilo de ticket tipo recibo
    doc.setFont("courier", "bold");
    doc.setFontSize(16);
    doc.text("***** TICKET DE PEDIDO LOCAL *****", 20, 20);
    doc.setFontSize(12);
    doc.text("---------------------------------", 20, 30);
    
    doc.text("### Pedido ###", 20, 40);
    doc.text(`Pizza 1: ${pizza1}`, 20, 50);
    doc.text(`Pizza 2: ${pizza2}`, 20, 60);
    doc.text(`Pizza 3: ${pizza3}`, 20, 70);
    doc.text(`Refresco: ${refresco}`, 20, 80);
    doc.text(`Papas: ${papas}`, 20, 90);
    doc.text(`Postre: ${postre}`, 20, 100);
    doc.text(`Ensalada: ${ensalada}`, 20, 110);

    doc.text("---------------------------------", 20, 120);
    doc.text(`Método de Pago: ${metodoPago}`, 20, 130);
    doc.text(`Total a Pagar: ${total}`, 20, 140);
    doc.text("---------------------------------", 20, 150);
    doc.text("Gracias por tu pedido", 20, 160);

    // Guardar y descargar el PDF
    doc.save("Ticket-Pedido-Local.pdf");
});


// Recuperar las pizzas seleccionadas desde localStorage
const pizza1 = localStorage.getItem('local-pizza1') || "No fue seleccionada";
const pizza2 = localStorage.getItem('local-pizza2') || "No fue seleccionada";
const pizza3 = localStorage.getItem('local-pizza3') || "No fue seleccionada";

// Recuperar los complementos seleccionados desde localStorage
const refresco = localStorage.getItem('local-refresco') === "true" ? "$30" : "No se selecciono";
const papas = localStorage.getItem('local-papas') === "true" ? "$45" : "No se selecciono";
const postre = localStorage.getItem('local-postre') === "true" ? "$55" : "No se selecciono";
const ensalada = localStorage.getItem('local-ensalada') === "true" ? "$35" : "No se selecciono";

// Recuperar el método de pago desde localStorage
const metodoPago = localStorage.getItem('local-metodoPago') || "Sin especificar";

// Recuperar el total desde localStorage
const total = localStorage.getItem('local-total') || "0";

// Mostrar las pizzas en el HTML
document.getElementById('local-pizza1').textContent = pizza1;
document.getElementById('local-pizza2').textContent = pizza2;
document.getElementById('local-pizza3').textContent = pizza3;

// Mostrar los complementos en el HTML
document.getElementById('local-refresco').textContent = refresco;
document.getElementById('local-papas').textContent = papas;
document.getElementById('local-postre').textContent = postre;
document.getElementById('local-ensalada').textContent = ensalada;

// Mostrar el método de pago en el HTML
document.getElementById('local-metodoPago').textContent = metodoPago;

// Mostrar el total en el HTML
document.getElementById('local-total').textContent = total;