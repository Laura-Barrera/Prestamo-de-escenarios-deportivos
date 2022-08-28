<?php
$firma=$_FILES['firma']['tmp_name'];
$name=$_FILES['firma']['name'];
#$mimeFirma =$_FILES['firma']['type'];
require("connection.php");
#$fp = fopen($firma, "rb");
#$contenido = fread($fp, $_FILES["firma"]["size"]);
#$contenido = addslashes($contenido);
#fclose($fp);
#$contenido =addslashes(file_get_contents($firma));
$folder = "firma/".$name;
$result=$conn->query("select MAX(codigoSolicitud) as cod from solicitud_prestamo");
$ultimoCod=$result->fetch_assoc();
$ultimoCod=$ultimoCod["cod"];
$conn->query("update solicitud_prestamo set firma='$name' where codigoSolicitud='$ultimoCod'");
#$conn->query("update solicitud_prestamo set mime_firma='$mimeFirma' where codigoSolicitud='$ultimoCod'");
if (move_uploaded_file($firma, $folder))  {
    $msg = "Image uploaded successfully";
}else{
    $msg = "Failed to upload image";
}

echo $msg;


