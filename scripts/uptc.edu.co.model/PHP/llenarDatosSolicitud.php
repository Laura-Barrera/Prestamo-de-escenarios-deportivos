<?php
require("connection.php");
$select = "SELECT concat(nombre,concat(' ',apellido)) as nombre, documento, direccion, telefono, correoelectronico, tipoPersona FROM usuario_activo";
$result = $conn->query($select);
$row = $result->fetch_assoc();
$data[] = $row["nombre"];
$data[] = $row["documento"];
$data[] = $row["direccion"];
$data[] = $row["telefono"];
$data[] = $row["correoelectronico"];
$data[] = $row["tipoPersona"];
echo json_encode($data);