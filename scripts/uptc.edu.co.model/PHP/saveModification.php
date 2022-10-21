<?php
require("connection.php");
$idModificacion=$_POST["numModificación"];
$seccional = $_POST["seccional"];
$escenario = $_POST["escenario"];
$fechaInicio = $_POST["fechaInicio"];
$horaInicio = $_POST["horaInicio"];
$fechaFin = $_POST["fechaFin"];
$horaFin = $_POST["horaFin"];

$codigoSolicitud = "select codigoPrestamo from modificacion where numModificación = '$idModificacion'";
$result = $conn->query($codigoSolicitud);
$result1=$result->fetch_assoc();
$result1=$result1["codigoPrestamo"];

$idEscenario = "select idEscenario from escenario_deportivo where nombre = '$escenario' and seccional = '$seccional'";
$result2 = $conn->query($idEscenario);
$result3=$result2->fetch_assoc();
$result3=$result3["idEscenario"];

$updateModificar = "update modificacion set estadoModificacion='Aprobado' where numModificación = '$idModificacion'";
$conn->query($updateModificar);

$updateSolicitud = "update solicitud_prestamo set fechaInicio='$fechaInicio', horaInicio = '$horaInicio', fechaFin='$fechaFin', horafin='$horaFin', idEscenario = '$result3' where codigoSolicitud = '$result1'";
$conn->query($updateSolicitud);

echo 1;


