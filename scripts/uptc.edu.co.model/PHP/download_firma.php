<?php
require ("connection.php");
$result=$conn->query("select MIN(firma) AS firma from solicitud_prestamo");
$imgData = $result->fetch_assoc();
$img="firma/".$imgData["firma"];
header('Content-Description: File Transfer');
header('Content-Type: image/jpeg');
header('Content-Disposition: attachment; filename='.basename($img));
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Pragma: public');
header('Content-Length: ' . filesize($img));
ob_clean();
flush();
readfile($img);
