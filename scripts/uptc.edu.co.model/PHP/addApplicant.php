<?php
$numUsuario = $_POST["numUsuario"];
$documento = $_POST["documento"];
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$direccion = $_POST["direccion"];
$telefono = $_POST["telefono"];
$correoelectronico = $_POST["correoelectronico"];
$usuario = $_POST["usuario"];
$contraseña = $_POST["contraseña"];
$codigoProfesional = $_POST["codigoProfesional"];
$tipoPersona = $_POST["tipoPersona"];

require ("connection.php");
$select = "SELECT documento FROM usuario where documento=$documento OR correoelectronico='$correoelectronico' OR usuario='$usuario'";
$result = $conn->query($select);
if ($result->num_rows > 0) {
    echo 1;
} else {
    $sql = "INSERT INTO usuario (numUsuario,documento,nombre,apellido,direccion,telefono,correoelectronico,usuario,contraseña,codigoProfesional,tipoPersona) values ('$numUsuario','$documento','$nombre','$apellido','$direccion','$telefono','$correoelectronico','$usuario','$contraseña','$codigoProfesional','$tipoPersona')";
    mysqli_query($conn, $sql);
    echo 0;
}
?>