<?php
require("connection.php");
$idModificacion=$_POST["numModificación"];

$codigoPresta = "select codigoPrestamo from modificacion where numModificación = '$idModificacion'";
$result = $conn->query($codigoPresta);
$result1=$result->fetch_assoc();
$result1=$result1["codigoPrestamo"];

$select = "select concat(usuario.nombre,concat(' ',usuario.apellido)) as nombre, usuario.documento, direccion, telefono, correoelectronico, tipoPersona,
       escenario_deportivo.seccional, escenario_deportivo.nombre as escenario, descripcion, concat(fechaInicio, concat(' ',horaInicio)) as fechaI, 
       concat(fechaFin, concat(' ',horaFin)) as fechaF from usuario join solicitud_prestamo on usuario.numUsuario = solicitud_prestamo.documento join 
           escenario_deportivo using (idEscenario) where codigoSolicitud = '$result1'";
$result2 = $conn->query($select);
$row = $result2->fetch_assoc();
$data[] = $row["nombre"];
$data[] = $row["documento"];
$data[] = $row["direccion"];
$data[] = $row["telefono"];
$data[] = $row["correoelectronico"];
$data[] = $row["tipoPersona"];
$data[] = $row["seccional"];
$data[] = $row["escenario"];
$data[] = $row["descripcion"];
$data[] = $row["fechaI"];
$data[] = $row["fechaF"];

echo json_encode($data);
