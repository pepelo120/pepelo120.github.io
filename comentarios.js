document.querySelector("#comentarios-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío para procesar el PDF

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Obtener los valores del formulario
    let nombre = document.getElementById("nombres").value;
    let apellido = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    // Agregar contenido al PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Comentario de Usuario", 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Nombre: ${nombre}`, 20, 40);
    doc.text(`Apellido: ${apellido}`, 20, 50);
    doc.text(`Correo Electrónico: ${correo}`, 20, 60);
    doc.text("Comentario:", 20, 80);
    doc.text(mensaje, 20, 90, { maxWidth: 170 });

    // Descargar automáticamente el PDF
    doc.save(`Comentario_${nombre}_${apellido}.pdf`);

    // Permitir el envío del formulario
    setTimeout(() => {
        document.querySelector("#comentarios-form").submit();
    }, 1000);
});
