<?php
$idSolicitud=$_POST["idSolicitud"];
require('connection.php');
$query="select documento from documentos where cod_solicitud='$idSolicitud'";
$result=$conn->query($query);
$data=[];
while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
    $data[]=$row['documento'];
}
echo json_encode($data);
