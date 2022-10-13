<?php
require("connection.php");
$select = "select numCancelacion, fechaPeticion, estado, codigoPrestamo from cancelacion, solicitud_prestamo where estadoCancelacion='Pendiente' and codigoPrestamo = codigoSolicitud";
$result = $conn->query($select);

$data=[];
$final=[];
while ($row = $result->fetch_array(MYSQLI_ASSOC)){
    $data[] = $row["numCancelacion"];
    $data[] = $row["fechaPeticion"];
    $data[] = $row["estado"];
    $data[] = $row["codigoPrestamo"];

    $final[] = $data;
    $data = [];
}

echo json_encode($final);
