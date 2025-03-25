// Recuperar datos del domicilio desde localStorage
const nombre = localStorage.getItem('nombre') || "Sin datos";
const telefono = localStorage.getItem('telefono') || "Sin datos";
const direccion = localStorage.getItem('direccion') || "Sin datos";
const calle = localStorage.getItem('calle') || "Sin datos";
const colonia = localStorage.getItem('colonia') || "Sin datos";
const municipio = localStorage.getItem('municipio') || "Sin datos";
const estado = localStorage.getItem('estado') || "Sin datos";

// Recuperar las pizzas seleccionadas desde localStorage
const pizza1 = localStorage.getItem('domicilio-pizza1') || "No fue seleccionada";
const pizza2 = localStorage.getItem('domicilio-pizza2') || "No fue seleccionada";
const pizza3 = localStorage.getItem('domicilio-pizza3') || "No fue seleccionada";

// Recuperar los complementos seleccionados desde localStorage
const refresco = localStorage.getItem('domicilio-refresco') === "true" ? "$30" : "No se selecciono";
const papas = localStorage.getItem('domicilio-papas') === "true" ? "$45" : "No se selecciono";
const postre = localStorage.getItem('domicilio-postre') === "true" ? "$55" : "No se selecciono";
const ensalada = localStorage.getItem('domicilio-ensalada') === "true" ? "$35" : "No se selecciono";

// Recuperar el método de pago desde localStorage
const metodoPago = localStorage.getItem('domicilio-metodoPago') || "Sin especificar";

// Recuperar el total desde localStorage
const total = localStorage.getItem('domicilio-total') || "0";

// Mostrar los datos en el HTML
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