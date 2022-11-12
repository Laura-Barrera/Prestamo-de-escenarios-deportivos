<?php
$numCancelacion = $_POST["numCancelacion"];
$descripcion = $_POST["descripcion"];
$fechaPeticion = $_POST["fechaPeticion"];
$estadoCancelacion = $_POST["estadoCancelacion"];
$codigoPrestamo = $_POST["codigoPrestamo"];

require("connection.php");
$count = "select count(numCancelacion) from cancelacion group by codigoPrestamo having codigoPrestamo = '$codigoPrestamo'";
$result = $conn->query($count);
$row = $result->fetch_assoc();

if($row == 0){
    $insert = "insert into cancelacion values ('$numCancelacion','$descripcion','$fechaPeticion','$estadoCancelacion','$codigoPrestamo')";
    $conn->query($insert);
    echo 1;
} else if ($row >= 1){
    echo 2;
} else {
    echo 3;
}