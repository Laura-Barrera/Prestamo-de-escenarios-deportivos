<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "prestamo_escenarios";
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_errno) {
    echo "Fallo al conectar a MySQL: (" . $conn->connect_errno . ") " . $conn->connect_error;
}
mysqli_set_charset($conn, "utf8");
?>

