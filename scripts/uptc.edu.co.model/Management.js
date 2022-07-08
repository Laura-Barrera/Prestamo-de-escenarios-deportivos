<<<<<<< HEAD
let solicitantes = [];
let grounds = [];
let loans = [];
let profesionales = [];
let solicitudes = [];
let prestamosInstitucionales = [];


var App = function () {
    var ground = new Ground("123", "123", "123", "123", "123");
    ground.mostrarEscenario();

    var applicant = new Applicant("1243", "nombre", "apellido", "telefono", "correo", "usuario", "contrasena", "Natural")
    applicant.addSolicitante();
}

var getInicioSesion = function () {
    var usuario = document.getElementById("usuario").value
    var contrasena = document.getElementById("contrasena").value

    if (usuario == "" || contrasena == "") {
        alert("usuario o contraseña vacíos")
    } else {
        alert("Usuario: " + usuario + " Contraseña: " + contrasena)
    }
}
var crearSolicitante = function () {
    var numeroDocumento = document.getElementById("REGdocumento").value
    var nombre = document.getElementById("REGnombre").value
    var apellido = document.getElementById("REGapellido").value
    var direccion = document.getElementById("REGdireccion").value
    var telefono = document.getElementById("REGtelefono").value
    var correo = document.getElementById("REGcorreo").value
    var usuario = document.getElementById("REGusuario").value
    var contrasena = document.getElementById("REGcontrasena").value
    var tipoPersona = document.getElementById("REGTipoUsuario").value
    if (!(numeroDocumento == "" || nombre == "" || apellido == "" || direccion == "" || telefono == "" || correo == "" || usuario == "" || contrasena == "" || tipoPersona == "")) {

        var solicitante = new Applicant(numeroDocumento, nombre, apellido, direccion, telefono, correo, usuario, contrasena, tipoPersona);
        var response = solicitante.addSolicitante();

        /*if (response == 1) {
            alert("Usuario creado exitosamente");
            window.location.replace("../index.html");
        } else {
            alert("Error al crear el usuario")
        }*/
    } else {
        alert("Alguno de los campos está vacío o no fue seleccionado");
    }

=======
class Management{

    constructor(props) {
        this.controller = new Controller();
    }


    validacionLogin(user, password){
        if(user === "123" && password === "123"){
            return true;
        } else {
            return false;
        }
    }
>>>>>>> 798d0c5d950f6f2d77e01098a2d4e3aded2902d9
}