<?php
$fechaInicio = $_POST["fechaInicio"];
$fechaFin = $_POST["fechaFin"];
$descripcion = $_POST["descripcion"];
$horaInicio = $_POST["horaInicio"] . ":00";
$horaFin = $_POST["horaFin"] . ":00";
$documento = $_POST["idSolicitante"];
$seccional = $_POST["seccional"];
$escenario = $_POST["escenario"];

require("connection.php");
$selectIdEscenario = "SELECT idEscenario, valorHora FROM escenario_deportivo WHERE nombre='$escenario' AND seccional='$seccional'";
$result = $conn->query($selectIdEscenario);
$row = $result->fetch_assoc();
$idEscenario = $row["idEscenario"];
$horaIni = new DateTime($horaInicio);
$horaTermino = new DateTime($horaFin);
$interval = $horaIni->diff($horaTermino);
$valor=(intval($interval->format('%H'))*$row['valorHora'])+((intval($interval->format('%i')))/60)*$row['valorHora'];
$valor=''.$valor;

$queryComprobar1="select fechaInicio, horaInicio, horaFin, idEscenario from solicitud_prestamo where estado='Aprobado'";
$resultComprobar1=$conn->query($queryComprobar1);

$queryComprobar2="select fechaInicio, horaInicio, horaFin, idEscenario from prestamo_institucional";
$resultComprobar2=$conn->query($queryComprobar2);

$count1=0;

while ($rowComprobar1 = $resultComprobar1->fetch_array(MYSQLI_ASSOC)){
    if ($rowComprobar1['fechaInicio']==$fechaInicio and $rowComprobar1['idEscenario']==$idEscenario){
        if (date($rowComprobar1['horaInicio']) >= date($horaFin) or date($rowComprobar1['horaFin'])<=date($horaInicio)){
            ;
        }else{
            $count1+=1;
        }
    }
}

$count2=0;

while ($rowComprobar2 = $resultComprobar2->fetch_array(MYSQLI_ASSOC)){
    if ($rowComprobar2['fechaInicio']==$fechaInicio and $rowComprobar2['idEscenario']==$idEscenario){
        if (date($rowComprobar2['horaInicio']) >= date($horaFin) or date($rowComprobar2['horaFin'])<=date($horaInicio)){
            ;
        }else{
            $count2+=1;
        }
    }
}


if ($count1==0 and $count2==0){
    $insert = "INSERT INTO solicitud_prestamo (codigoSolicitud, fechaInicio, fechaFin, estado, descripcion, horaInicio, horaFin, costo, documento, idEscenario) VALUES (null, '$fechaInicio', '$fechaFin','En revisión', '$descripcion', '$horaInicio', '$horaFin', '$valor','$documento', '$idEscenario');";
    $conn->query($insert);
    $valores="update solicitud_prestamo set costo=0 where documento=any(select numUsuario from usuario where tipoPersona='Estudiante' or tipoPersona='Funcionario' or tipoPersona='Docente')";
    $conn->query($valores);
    echo 1;
}else if ($count1==1 or $count2==1){
    echo 2;
} else {
    echo 3;
}
