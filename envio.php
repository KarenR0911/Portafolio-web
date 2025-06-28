<?php 
	$name = $_POST['name'];
	$last-name = $_POST['last-name'];
	$email = $_POST['email'];
	$asunto = 'Formulario Rellenado';
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['message'];


	if(mail('karenmrv10@gmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>