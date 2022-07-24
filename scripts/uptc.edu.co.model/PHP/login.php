<?php
$usuario = $_POST["usuario"];
$contrasena = $_POST["contrasena"];

require("connection.php");
$select = "SELECT nombre, apellido, codigoProfesional FROM usuario WHERE usuario='$usuario' AND contrasena='$contrasena'";
$result = $conn->query($select);
if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data[] = $row["nombre"];
        $data[] = $row["apellido"];
        $data[] = $row["codigoProfesional"];
        echo json_encode($data);
} else {
    echo 1;
}