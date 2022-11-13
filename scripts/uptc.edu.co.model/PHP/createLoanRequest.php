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
$selectIdEscenario = "SELECT idEscenario, valorHora FROM escenario_deportivo WHERE nombre='$escenario' AND seccional='$seccional'";
$result = $conn->query($selectIdEscenario);
$row = $result->fetch_assoc();
$idEscenario = $row["idEscenario"];
$horaIni = new DateTime($horaInicio);
$horaTermino = new DateTime($horaFin);
$interval = $horaIni->diff($horaTermino);
$valor=(intval($interval->format('%H'))*$row['valorHora'])+((intval($interval->format('%i')))/60)*$row['valorHora'];
$valor=''.$valor;
$insert = "INSERT INTO solicitud_prestamo (codigoSolicitud, fechaInicio, fechaFin, estado, descripcion, horaInicio, horaFin, costo, documento, idEscenario) VALUES (null, '$fechaInicio', '$fechaFin','En revisión', '$descripcion', '$horaInicio', '$horaFin', '$valor','$documento', '$idEscenario');";
$conn->query($insert);

echo 1;
