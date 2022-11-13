<?php
require("connection.php");
$idModificacion=$_POST["numModificación"];

$select = "select descripcion from modificacion where numModificación = '$idModificacion'";
$result = $conn->query($select);
$row = $result->fetch_assoc();
$data=$row["descripcion"];
echo json_encode($data);