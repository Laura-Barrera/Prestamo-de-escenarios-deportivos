
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
                    document.cookie = 'userId='+datos[3]+';path=/';
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
var datosFormulario = function (){
    var nombre=document.getElementById("GenSolNombre");
    var documento=document.getElementById("GenSolDocumento");
    var direccion=document.getElementById("GenSolDireccion");
    var telefono=document.getElementById("GenSolTelefono");
    var correo=document.getElementById("GenSolEmail");
    var tipoUsuario=document.getElementById("GenSolTipoUsuario");
    $.ajax({
        async: true,
        type: 'POST',
        data: {
            userId: document.cookie.substring(7,document.cookie.length)
        },
        url: 'scripts/uptc.edu.co.model/PHP/llenarDatosSolicitud.php',
        success: function (response) {
            datos = JSON.parse(response)
            nombre.setAttribute("placeholder",datos[0]);
            documento.setAttribute("placeholder",datos[1]);
            direccion.setAttribute("placeholder",datos[2]);
            telefono.setAttribute("placeholder",datos[3]);
            correo.setAttribute("placeholder",datos[4]);
            tipoUsuario.setAttribute("placeholder",datos[5]);
        }
    });

}

var prueba = function (){
    alert(document.cookie.substring(7,document.cookie.length));
    //document.getElementById("UserSession2").innerText="Laura Barrera"
}
var nombreUsuario = function (){
    $.ajax({
        type: 'POST',
        data: {
            userId: document.cookie.substring(7,document.cookie.length)
        },
        url: 'scripts/uptc.edu.co.model/PHP/nombreUsuario.php',
        success: function (response){
            var nombre = JSON.parse(response);
            document.getElementById("UserSession").innerText=nombre;
        }
    });
}

var cargarEscenarios = function (){
    var seccional = document.getElementById("seccional").value;
    $.ajax({
       type: 'POST',
       data: {
           sede: seccional
       },
       url:'scripts/uptc.edu.co.model/PHP/cargarEscenarios.php',
       success: function (response){
           datos=JSON.parse(response);
           var select = document.getElementById("escenario");
           select.innerHTML=""
           var option= document.createElement("option")
           option.setAttribute("value","");
           option.innerText="Seleccione...";
           select.append(option)
           for (let i = 0; i < datos.length; i++) {
               var option= document.createElement("option")
               option.setAttribute("value",datos[i]);
               option.innerText=datos[i];
               select.append(option)
           }
       }
    });
}