<?php 
    // Captura de Datos
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $consult = $_POST["consult"];

    // Preparacion del Mensaje
    mail(
        "root@localhost", # destinatario
        $subject,# asunto
        $consult, # cuerpo
        "From:$name<$email>" # remitente
    );

    // Redireccionamiento
    echo("
        <strong>Nombre: </strong> $name <br>
        <strong>Correo: </strong> $email <br>
        <strong>Asunto: </strong> $subject <br>
        <strong>Consulta: </strong> $consult <br>
    ");
?>
<p>
    Muchas gracias por realizar su consulta, puede volver a la pagina anterior haciendo click en el siguiente <a href="../about.html">link</a>
</p>