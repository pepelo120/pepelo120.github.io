document.addEventListener("DOMContentLoaded", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Recuperar datos del domicilio desde localStorage
    const nombre = localStorage.getItem('nombre') || "Sin datos";
    const telefono = localStorage.getItem('telefono') || "Sin datos";
    const direccion = localStorage.getItem('direccion') || "Sin datos";
    const calle = localStorage.getItem('calle') || "Sin datos";
    const colonia = localStorage.getItem('colonia') || "Sin datos";
    const municipio = localStorage.getItem('municipio') || "Sin datos";
    const estado = localStorage.getItem('estado') || "Sin datos";

    // Recuperar las pizzas seleccionadas desde localStorage
    const pizza1 = localStorage.getItem('domicilio-pizza1') || "No seleccionada";
    const pizza2 = localStorage.getItem('domicilio-pizza2') || "No seleccionada";
    const pizza3 = localStorage.getItem('domicilio-pizza3') || "No seleccionada";

    // Recuperar complementos
    const refresco = localStorage.getItem('domicilio-refresco') === "true" ? "$30" : "No seleccionado";
    const papas = localStorage.getItem('domicilio-papas') === "true" ? "$45" : "No seleccionado";
    const postre = localStorage.getItem('domicilio-postre') === "true" ? "$55" : "No seleccionado";
    const ensalada = localStorage.getItem('domicilio-ensalada') === "true" ? "$35" : "No seleccionado";

    // Recuperar método de pago y total
    const metodoPago = localStorage.getItem('domicilio-metodoPago') || "Sin especificar";
    const total = localStorage.getItem('domicilio-total') || "$0";

    // Estilo de ticket tipo recibo
    doc.setFont("courier", "bold");
    doc.setFontSize(16);
    doc.text("***** TICKET DE PEDIDO A DOMICILIO *****", 20, 20);
    doc.setFontSize(12);
    doc.text("---------------------------------", 20, 30);
    doc.text(`Nombre: ${nombre}`, 20, 40);
    doc.text(`Teléfono: ${telefono}`, 20, 50);
    doc.text(`Dirección: ${direccion}`, 20, 60);
    doc.text(`Calle: ${calle}`, 20, 70);
    doc.text(`Colonia: ${colonia}`, 20, 80);
    doc.text(`Municipio: ${municipio}`, 20, 90);
    doc.text(`Estado: ${estado}`, 20, 100);
    doc.text("---------------------------------", 20, 110);
    
    doc.text("### Pedido ###", 20, 120);
    doc.text(`Pizza 1: ${pizza1}`, 20, 130);
    doc.text(`Pizza 2: ${pizza2}`, 20, 140);
    doc.text(`Pizza 3: ${pizza3}`, 20, 150);
    doc.text(`Refresco: ${refresco}`, 20, 160);
    doc.text(`Papas: ${papas}`, 20, 170);
    doc.text(`Postre: ${postre}`, 20, 180);
    doc.text(`Ensalada: ${ensalada}`, 20, 190);
    doc.text("---------------------------------", 20, 200);
    
    doc.text(`Método de Pago: ${metodoPago}`, 20, 210);
    doc.text(`Total a Pagar: ${total}`, 20, 220);
    doc.text("---------------------------------", 20, 230);
    doc.text("Gracias por tu pedido", 20, 240);

    // Guardar y descargar el PDF
    doc.save("Ticket-Pedido.pdf");
});

const nombre = localStorage.getItem('nombre') || "Sin datos";
const telefono = localStorage.getItem('telefono') || "Sin datos";
const direccion = localStorage.getItem('direccion') || "Sin datos";
const calle = localStorage.getItem('calle') || "Sin datos";
const colonia = localStorage.getItem('colonia') || "Sin datos";
const municipio = localStorage.getItem('municipio') || "Sin datos";
const estado = localStorage.getItem('estado') || "Sin datos";

const pizza1 = localStorage.getItem('domicilio-pizza1') || "No fue seleccionada";
const pizza2 = localStorage.getItem('domicilio-pizza2') || "No fue seleccionada";
const pizza3 = localStorage.getItem('domicilio-pizza3') || "No fue seleccionada";

const refresco = localStorage.getItem('domicilio-refresco') === "true" ? "$30" : "No se seleccionó";
const papas = localStorage.getItem('domicilio-papas') === "true" ? "$45" : "No se seleccionó";
const postre = localStorage.getItem('domicilio-postre') === "true" ? "$55" : "No se seleccionó";
const ensalada = localStorage.getItem('domicilio-ensalada') === "true" ? "$35" : "No se seleccionó";

const metodoPago = localStorage.getItem('domicilio-metodoPago') || "Sin especificar";
const total = localStorage.getItem('domicilio-total') || "0";

// Mostrar en el HTML
document.getElementById('domicilio-nombre').textContent = nombre;
document.getElementById('domicilio-telefono').textContent = telefono;
document.getElementById('domicilio-direccion').textContent = direccion;
document.getElementById('domicilio-calle').textContent = calle;
document.getElementById('domicilio-colonia').textContent = colonia;
document.getElementById('domicilio-municipio').textContent = municipio;
document.getElementById('domicilio-estado').textContent = estado;

document.getElementById('domicilio-pizza1').textContent = pizza1;
document.getElementById('domicilio-pizza2').textContent = pizza2;
document.getElementById('domicilio-pizza3').textContent = pizza3;

document.getElementById('domicilio-refresco').textContent = refresco;
document.getElementById('domicilio-papas').textContent = papas;
document.getElementById('domicilio-postre').textContent = postre;
document.getElementById('domicilio-ensalada').textContent = ensalada;

document.getElementById('domicilio-metodoPago').textContent = metodoPago;
document.getElementById('domicilio-total').textContent = total;
