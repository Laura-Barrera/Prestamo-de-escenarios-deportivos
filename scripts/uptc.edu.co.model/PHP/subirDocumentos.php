<?php
$documentos=$_FILES;
$keys=array_keys($documentos);
require ("connection.php");
$result=$conn->query("select MAX(codigoSolicitud) as cod from solicitud_prestamo");
$ultimoCod=$result->fetch_assoc();
$ultimoCod=$ultimoCod["cod"];
$msg=0;
for ($i=0;$i<sizeof($keys);$i++){
    $documento=$documentos[$keys[$i]]['tmp_name'];
    $name=$documentos[$keys[$i]]['name'];
    $mimeDocumento =$documentos[$keys[$i]]['type'];
    $name=$ultimoCod.$keys[$i];
    $folder="documentos/".$name.".pdf";
    if (move_uploaded_file($documento, $folder))  {
        $msg = 1;
        $conn->query("INSERT INTO documentos (id_documento, documento, mime_documento, cod_solicitud) VALUES ('0','$name','$mimeDocumento','$ultimoCod')");
    }else{
        $msg = 2;
        break;
    }
    print_r($documento.$name.$mimeDocumento);
}

echo $msg;

