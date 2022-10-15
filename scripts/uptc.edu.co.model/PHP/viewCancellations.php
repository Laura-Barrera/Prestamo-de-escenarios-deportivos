<?php
require("connection.php");
$select = "select numCancelacion, fechaPeticion, estado, cancelacion.descripcion, codigoPrestamo from cancelacion, solicitud_prestamo where estadoCancelacion='Pendiente' and codigoPrestamo = codigoSolicitud and solicitud_prestamo.estado != 'Cancelado'";
$result = $conn->query($select);

$data=[];
$final=[];
while ($row = $result->fetch_array(MYSQLI_ASSOC)){
    $data[] = $row["numCancelacion"];
    $data[] = $row["fechaPeticion"];
    $data[] = $row["estado"];
    $data[] = $row["descripcion"];
    $data[] = $row["codigoPrestamo"];
    $data[] = 1;

    $final[] = $data;
    $data = [];
}

echo json_encode($final);
