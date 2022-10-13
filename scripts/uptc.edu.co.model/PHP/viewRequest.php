<?php
require("connection.php");
$id=$_POST["userId"];
$select = "select codigoSolicitud, fechaInicio, fechaFin, escenario_deportivo.nombre, escenario_deportivo.seccional, horaInicio, horaFin, estado, costo from solicitud_prestamo, escenario_deportivo where solicitud_prestamo.idEscenario = escenario_deportivo.idEscenario and solicitud_prestamo.documento='$id'";
$result = $conn->query($select);

$data=[];
$final=[];
while ($row = $result->fetch_array(MYSQLI_ASSOC)){
    $data[] = $row["codigoSolicitud"];
    $data[] = $row["fechaInicio"];
    $data[] = $row["fechaFin"];
    $data[] = $row["nombre"];
    $data[] = $row["seccional"];
    $data[] = $row["horaInicio"];
    $data[] = $row["horaFin"];
    $data[] = $row["estado"];
    $data[] = $row["costo"];

    $final[] = $data;
    $data = [];
}

echo json_encode($final);