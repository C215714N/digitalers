<?php 
// captura de datos
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$consult = $_POST['consult']; 

// generacion del mensaje
mail(
    "usuario@mihosting.com", # destinatario
    $subject, # asunto
    $consult, # cuerpo
    "From: $name<$email>" # remitente
);

// redireccionamiento
header("location: ../community.html");
?>
<h1>Fundamentos Web</h1>
<p>
    Le agradecemos por confiar en nosotros, su consulta sera contestada a la brevedad. Mientras puede <a href="../community.html">Volver a la pagina anterior</a> para ver mas novedades.
</p>