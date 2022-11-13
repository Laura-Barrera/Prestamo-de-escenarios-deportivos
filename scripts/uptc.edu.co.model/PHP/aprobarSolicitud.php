<?php

$idSolicitud=$_POST['idSolicitud'];

require('connection.php');

$queryComprobar1="select fechaInicio, horaInicio, horaFin, idEscenario from solicitud_prestamo where codigoSolicitud!='$idSolicitud' and estado='Aprobado'";
$queryComprobar2="select fechaInicio, horaInicio, horaFin, idEscenario from solicitud_prestamo where codigoSolicitud='$idSolicitud'";
$resultComprobar1=$conn->query($queryComprobar1);
$resultComprobar2=$conn->query($queryComprobar2);

$rowComprobar2=$resultComprobar2->fetch_assoc();
$count=0;
while ($row = $resultComprobar1->fetch_array(MYSQLI_ASSOC)){
    if ($row['fechaInicio']==$rowComprobar2['fechaInicio'] and $row['idEscenario']==$rowComprobar2['idEscenario']){
        if (date($row['horaInicio']) >= date($rowComprobar2['horaFin']) or date($row['horaFin'])<=date($rowComprobar2['horaInicio'])){
            ;
        }else{
         $count+=1;
        }
    }
}
if ($count==0){
    $query="update solicitud_prestamo set estado='Aprobado' where codigoSolicitud='$idSolicitud'";
    $result=$conn->query($query);
    echo $result;
}else{
    echo 2;
}
