<?php
$idSolicitud=$_GET["idSolicitud"];
require ("connection.php");
$result=$conn->query("select firma AS firma, mime_firma as mime from solicitud_prestamo where codigoSolicitud='$idSolicitud'");
$imgData = $result->fetch_assoc();
$img="firma/".$imgData["firma"];
header("Cache-Control: public");
header("Content-Description: File Transfer");
header("Content-Transfer-Encoding: binary");
header('Content-type: '.$imgData["mime"]);
header('Content-Length: ' . filesize($img));
header('Content-Disposition: attachment; filename='.basename($img));
ob_clean();
flush();
readfile($img);


