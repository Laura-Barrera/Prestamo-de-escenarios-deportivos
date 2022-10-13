<?php
$codigoPrestamoInstitucional = $_POST["codigoPrestamoInstitucional"];
$fechaInicio = $_POST["fechaInicio"];
$fechaFin = $_POST["fechaFin"];
$horaInicio = $_POST["horaInicio"] . ":00";
$horaFin = $_POST["horaFin"] . ":00";
$descripcion = $_POST["descripcion"];
$seccional = $_POST["seccional"];
$escenario = $_POST["escenario"];

require("connection.php");
$selectIdEscenario = "SELECT idEscenario FROM escenario_deportivo WHERE nombre='$escenario' AND seccional='$seccional'";
$result = $conn->query($selectIdEscenario);
$row = $result->fetch_assoc();
$idEscenario = $row["idEscenario"];
$insert = "insert into prestamo_institucional (codigoPrestamoInstitucional,fechaInicio,fechaFin,horaInicio,horaFin,descripcion,idEscenario) values ('$codigoPrestamoInstitucional','$fechaInicio','$fechaFin','$horaInicio','$horaFin','$descripcion','$idEscenario');";
$conn->query($insert);

echo 1;