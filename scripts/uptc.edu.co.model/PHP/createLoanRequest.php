<?php
$fechaInicio = $_POST["fechaInicio"];
$fechaFin = $_POST["fechaFin"];
$descripcion = $_POST["descripcion"];
$horaInicio = $_POST["horaInicio"] . ":00";
$horaFin = $_POST["horaFin"] . ":00";
$documento = $_POST["idSolicitante"];
$seccional = $_POST["seccional"];
$escenario = $_POST["escenario"];

require("connection.php");
$selectIdEscenario = "SELECT idEscenario FROM escenario_deportivo WHERE nombre='$escenario' AND seccional='$seccional'";
$result = $conn->query($selectIdEscenario);
$row = $result->fetch_assoc();
$idEscenario = $row["idEscenario"];
$insert = "INSERT INTO solicitud_prestamo (codigoSolicitud, fechaInicio, fechaFin, estado, descripcion, horaInicio, horaFin, documento, idEscenario) VALUES (null, '$fechaInicio', '$fechaFin','No autorizado', '$descripcion', '$horaInicio', '$horaFin','$documento', '$idEscenario');";
$conn->query($insert);

echo 1;
