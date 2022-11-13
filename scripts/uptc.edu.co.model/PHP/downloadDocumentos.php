<?php
$idSolicitud = $_GET["idSolicitud"];
$nombreDoc = $_GET["nombreDoc"];
echo $idSolicitud . $nombreDoc;
require("connection.php");
$result = $conn->query("select documento AS documento from documentos where cod_solicitud='$idSolicitud' and documento='$nombreDoc'");
$row = $result->fetch_array(MYSQLI_ASSOC);
$img = "documentos/" . $row["documento"] . '.pdf';
header("Pragma: private");
header("Expires: 0");
header("Cache-Control: private");
header("Content-Description: File Transfer");
header("Content-Transfer-Encoding: binary");
header('Content-Disposition: attachment; filename=' . $row["documento"].'.pdf');
header("Content-type: application/pdf");
header('Content-Length: ' . filesize($img));

ob_clean();
ob_flush();

echo file_get_contents($img);



