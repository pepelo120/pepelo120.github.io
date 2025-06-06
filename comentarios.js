document.querySelector("#comentarios-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let nombre = document.getElementById("nombres").value;
    let apellido = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

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

    doc.save(`Comentario_${nombre}_${apellido}.pdf`);

    setTimeout(() => {
        document.querySelector("#comentarios-form").submit();
    }, 1000);
});

document.getElementById("generarPDF").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let nombre = document.getElementById("nombres").value;
    let apellido = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    if (!nombre || !apellido || !correo || !mensaje) {
        alert("Por favor, completa todos los campos antes de generar el PDF.");
        return;
    }

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

    doc.save(`Comentario_${nombre}_${apellido}.pdf`);
});
