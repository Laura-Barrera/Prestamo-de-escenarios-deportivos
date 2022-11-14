<?php
$to = "destinatario@email.com, destinatario2@email.com, destinatario3@email.com";
$subject = "Asunto del email";
$message = "Este es mi primer envío de email con PHP";
$headers = "From: prestamoescenarios@uptc.edu.co" . "\r\n" . "CC: destinatarioencopia@email.com";

mail($to, $subject, $message, $headers);
