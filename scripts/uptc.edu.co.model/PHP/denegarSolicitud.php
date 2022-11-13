<?php

$idSolicitud=$_POST['idSolicitud'];

require('connection.php');

$query="update solicitud_prestamo set estado='No Autorizado' where codigoSolicitud='$idSolicitud'";
$result=$conn->query($query);
echo $result;
