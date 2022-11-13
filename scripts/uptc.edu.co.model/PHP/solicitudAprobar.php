<?php
$idPrestamo=$_POST["prestamo"];
require ("connection.php");
$query="select concat(concat(usuario.nombre,' '), usuario.apellido) as nombre, usuario.documento as documento, usuario.direccion as direccion, usuario.telefono as telefono, usuario.correoelectronico as correo, usuario.tipoPersona as tipoPersona, escenario_deportivo.seccional as seccional, escenario_deportivo.nombre as escenario, solicitud_prestamo.descripcion as descripcion, solicitud_prestamo.fechaInicio as fechaInicio, solicitud_prestamo.fechaFin as fechaFin, solicitud_prestamo.horaInicio as horaInicio, solicitud_prestamo.horaFin as horaFin from (usuario right join solicitud_prestamo on usuario.numUsuario=solicitud_prestamo.documento) left join escenario_deportivo on escenario_deportivo.idEscenario=solicitud_prestamo.idEscenario where solicitud_prestamo.codigoSolicitud='$idPrestamo'";

$result = $conn->query($query);

$row= $result->fetch_assoc();


$data[]=$row["nombre"];
$data[]=$row["documento"];
$data[]=$row["direccion"];
$data[]=$row["telefono"];
$data[]=$row["correo"];
$data[]=$row["tipoPersona"];
$data[]=$row["seccional"];
$data[]=$row["escenario"];
$data[]=$row["descripcion"];
$data[]=$row["fechaInicio"];
$data[]=$row["fechaFin"];
$data[]=$row["horaInicio"];
$data[]=$row["horaFin"];

echo json_encode($data);