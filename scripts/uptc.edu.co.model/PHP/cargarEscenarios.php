<?php

require("connection.php");
$seccional = $_POST["sede"];
$select = "SELECT nombre FROM escenario_deportivo WHERE seccional='$seccional'";
$result = $conn -> query($select);

$data=[];
while ($row = $result->fetch_array(MYSQLI_ASSOC))
    $data[] = $row["nombre"];

echo json_encode($data);