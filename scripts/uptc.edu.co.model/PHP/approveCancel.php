<?php
require("connection.php");
$idCancel=$_POST["numCancelacion"];

$updateCancel = "update cancelacion set estadoCancelacion='Aprobado'";
$result = $conn->query($updateCancel);

$codigoPresta = "select codigoPrestamo from cancelacion where numCancelacion = '$idCancel'";
$result1 = $conn->query($codigoPresta);

$updatePrestamo = "update solicitud_prestamo set estado = 'Cancelado' where codigoPrestamo = '$result1'";
$result2 = $conn->query($updatePrestamo);




