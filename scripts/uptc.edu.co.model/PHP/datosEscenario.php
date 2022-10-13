<?php

$idEscenario=$_POST["idEscenario"];

require ("connection.php");

$query = "SELECT nombre, seccional from escenario_deportivo where idEscenario='$idEscenario'";
$result = $conn->query($query);
$row= $result->fetch_assoc();
$data[] = $row["nombre"];
$data[]= $row["seccional"];
echo json_encode($data);
