let solicitantes = [];
let grounds = [];
let loans = [];
let profesionales = [];
let solicitudes = [];
let prestamosInstitucionales = [];


var getInicioSesion = function () {
    var LOGusuario = document.getElementById("LOGusuario").value
    var LOGcontrasena = document.getElementById("LOGcontrasena").value
    var datos = []
    if (LOGusuario == "" || LOGcontrasena == "") {
        alert("usuario o contraseña vacíos")
    } else {
        $.ajax({
            async: false,
            type: 'POST',
            url: 'scripts/uptc.edu.co.model/PHP/login.php',
            data: {
                usuario: LOGusuario,
                contrasena: LOGcontrasena
            },
            success: function (response) {
                datos = JSON.parse(response)
                if (!(response == 1)) {
                    if (datos[2] == "NULL") {
                        window.location.href = "applicantMainView.html";
                    } else {
                        window.location.href = "professionalMainView.html";
                    }
                } else {
                    alert("Usuario o contraseña incorrectos")
                }
            }
        });
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

}