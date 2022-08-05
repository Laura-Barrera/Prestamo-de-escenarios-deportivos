<?php
require ("connection.php");
$id=$_POST["userId"];
$query = "SELECT concat(nombre,concat(' ',apellido)) as nombre from usuario where numUsuario = $id";
$result = $conn->query($query);
$row = $result->fetch_assoc();
$data=$row["nombre"];
echo json_encode($data);

