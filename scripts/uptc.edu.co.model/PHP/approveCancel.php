<?php
require("connection.php");
$idCancel=$_POST["numCancelacion"];

$updateCancel = "update cancelacion set estadoCancelacion='Aprobado' where numCancelacion = '$idCancel'";
$conn->query($updateCancel);

$codigoPresta = "select codigoPrestamo from cancelacion where numCancelacion = '$idCancel'";
$result = $conn->query($codigoPresta);
$result1=$result->fetch_assoc();
$result1=$result1["codigoPrestamo"];

$updateModif = "update modificacion set estadoModificacion='Cancelado' where codigoPrestamo = '$result1'";
$conn->query($updateModif);

$updatePrestamo = "update solicitud_prestamo set estado = 'Cancelado' where codigoSolicitud = '$result1'";
$conn->query($updatePrestamo);

echo 1;




