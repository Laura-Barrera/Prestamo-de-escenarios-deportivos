<?php
$numModificación = $_POST["numModificación"];
$descripcion = $_POST["descripcion"];
$fechaPeticion = $_POST["fechaPeticion"];
$estadoModificacion = $_POST["estadoModificacion"];
$codigoPrestamo = $_POST["codigoPrestamo"];

require("connection.php");
$count = "select count(numModificación) from modificacion group by codigoPrestamo having codigoPrestamo = '$codigoPrestamo'";
$result = $conn->query($count);
$row = $result->fetch_assoc();

if($row == 0){
    $insert = "insert into modificacion values ('$numModificación','$descripcion','$fechaPeticion','$estadoModificacion','$codigoPrestamo')";
    $conn->query($insert);
    echo 1;
} else if ($row >= 1){
    echo 2;
} else {
    echo 3;
}