<?php
$codigoPrestamoInstitucional = $_POST["codigoPrestamoInstitucional"];
$fechaInicio = $_POST["fechaInicio"];
$fechaFin = $_POST["fechaFin"];
$horaInicio = $_POST["horaInicio"] . ":00";
$horaFin = $_POST["horaFin"] . ":00";
$descripcion = $_POST["descripcion"];
$seccional = $_POST["seccional"];
$escenario = $_POST["escenario"];

require("connection.php");

$selectIdEscenario = "SELECT idEscenario FROM escenario_deportivo WHERE nombre='$escenario' AND seccional='$seccional'";
$result = $conn->query($selectIdEscenario);
$rowIdEscenario = $result->fetch_assoc();
$idEscenario = $rowIdEscenario["idEscenario"];

$queryComprobar1="select codigoSolicitud, fechaInicio, horaInicio, horaFin, idEscenario from solicitud_prestamo where estado='Aprobado'";
$resultComprobar1=$conn->query($queryComprobar1);

$count=0;
$codigo=0;

while ($row = $resultComprobar1->fetch_array(MYSQLI_ASSOC)){
    if ($row['fechaInicio']==$fechaInicio and $row['idEscenario']==$idEscenario){
        if (date($row['horaInicio']) >= date($horaFin) or date($row['horaFin'])<=date($horaInicio)){
            ;
        }else{
            $count+=1;
            $codigo=$row['codigoSolicitud'];
        }
    }
}

if ($count==0){
    $insert = "insert into prestamo_institucional (codigoPrestamoInstitucional,fechaInicio,fechaFin,horaInicio,horaFin,descripcion,idEscenario) values ('$codigoPrestamoInstitucional','$fechaInicio','$fechaFin','$horaInicio','$horaFin','$descripcion','$idEscenario');";
    $conn->query($insert);
    echo 1;
}else if ($count==1){
    $update = "update solicitud_prestamo set estado='Cancelado' where codigoSolicitud='$codigo'";
    $conn->query($update);
    $insertN = "insert into prestamo_institucional (codigoPrestamoInstitucional,fechaInicio,fechaFin,horaInicio,horaFin,descripcion,idEscenario) values ('$codigoPrestamoInstitucional','$fechaInicio','$fechaFin','$horaInicio','$horaFin','$descripcion','$idEscenario');";
    $conn->query($insertN);
    echo 1;
} else {
    echo 2;
}