<?php
require("connection.php");
$select = "select numModificación, fechaPeticion, estado, modificacion.descripcion, codigoPrestamo from modificacion, solicitud_prestamo where estadoModificacion='Pendiente' and codigoPrestamo = codigoSolicitud and solicitud_prestamo.estado != 'Cancelado'";
$result = $conn->query($select);

$data=[];
$final=[];
while ($row = $result->fetch_array(MYSQLI_ASSOC)){
    $data[] = $row["numModificación"];
    $data[] = $row["fechaPeticion"];
    $data[] = $row["estado"];
    $data[] = $row["descripcion"];
    $data[] = $row["codigoPrestamo"];
    $data[] = 0;

    $final[] = $data;
    $data = [];
}

echo json_encode($final);