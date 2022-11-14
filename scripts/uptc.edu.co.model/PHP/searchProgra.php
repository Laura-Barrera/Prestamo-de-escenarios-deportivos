<?php
$fecha=$_POST['fecha'];
require('connection.php');

$query="select horaInicio, horaFin, escenario.nombre as nombre, seccional from solicitud_prestamo as solicitud inner join escenario_deportivo as escenario on escenario.idEscenario=solicitud.idEscenario where fechaInicio='$fecha' and solicitud.estado='Aprobado'";
$result=$conn->query($query);
$data = [];
$final =[];
while ($row = $result->fetch_array(MYSQLI_ASSOC)){
    $data[]=$row['horaInicio'].' - '.$row['horaFin'];
    $data[]=$row['nombre'];
    $data[]=$row['seccional'];
    $final[]=$data;
    $data=[];
}
$query="select horaInicio, horaFin, escenario.nombre as nombre, seccional from prestamo_institucional as solicitud inner join escenario_deportivo as escenario on escenario.idEscenario=solicitud.idEscenario where fechaInicio='$fecha'";
$result2=$conn->query($query);
while ($row2 = $result2->fetch_array(MYSQLI_ASSOC)){
    $data[]=$row2['horaInicio'].' - '.$row2['horaFin'];
    $data[]=$row2['nombre'];
    $data[]=$row2['seccional'];
    $final[]=$data;
    $data=[];
}

echo json_encode($final);

