<?php

require("connection.php");

$idSolicitante= $_POST["id"];
$query1="SELECT tipoPersona FROM usuario WHERE numUsuario='$idSolicitante'";
$result1=$conn->query($query1);
$result1=$result1->fetch_assoc();
$result1=$result1["tipoPersona"];
$query2="SELECT nombreDocumento from documentos_requeridos where tipoPersona='$result1'";
$result=$conn->query($query2);
$data=[];
while ($row = $result->fetch_array(MYSQLI_ASSOC))
    $data[] = $row["nombreDocumento"];

echo json_encode($data);
