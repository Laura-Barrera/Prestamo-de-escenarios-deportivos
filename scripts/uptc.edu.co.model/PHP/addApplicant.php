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
$sql = "INSERT INTO usuario (numUsuario,documento,nombre,apellido,direccion,telefono,correoelectronico,usuario,contraseña,codigoProfesional,tipoPersona) values ('$numUsuario','$documento','$nombre','$apellido','$direccion','$telefono','$correoelectronico','$usuario','$contraseña','$codigoProfesional','$tipoPersona')";
#$sql2 = "INSERT INTO solicitante (tipoPersona) values ('$tipoPersona')";
mysqli_query($conn, $sql);
#mysqli_query($conn, $sql2);
echo 1;
?>