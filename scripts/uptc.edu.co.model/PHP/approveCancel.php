<?php
require("connection.php");
$idCancel=$_POST["numCancelacion"];

$updateCancel = "update cancelacion set estadoCancelacion='Aprobado'";
$result = $conn->query($updateCancel);


