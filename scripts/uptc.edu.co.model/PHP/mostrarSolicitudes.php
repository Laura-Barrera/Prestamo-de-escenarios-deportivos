<?php
require('connection.php');

$query = 'SELECT codigoSolicitud, documento, fechaInicio, fechaFin, idEscenario, horaInicio, horaFin FROM solicitud_prestamo WHERE estado="En revisión"';
$result = $conn->query($query);
$data = [];
$final =[];
while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $data[] = $row["codigoSolicitud"];
    $data[] = $row["documento"];
    $data[]=$row["fechaInicio"];
    $data[]=$row["fechaFin"];
    $data[]=$row["idEscenario"];
    $data[]=$row["horaInicio"];
    $data[]=$row["horaFin"];
    $final[]=$data;
    $data=[];
}

echo json_encode($final);