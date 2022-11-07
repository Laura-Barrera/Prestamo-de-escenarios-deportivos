
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
                    document.cookie = 'userId=' + datos[3] + ';path=/';
                    document.cookie='userIdTest=' + 'holaMundo' + ';path=/'
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

var getCookie= function (){
    var cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {

        if(i==0 && cookies[i].substring(0, 7)=="userId="){
            return cookies[i].substring(7, cookies[i].length)
        } else if ( cookies[i].substring(0, 8)==" userId="){
            return cookies[i].substring(8, cookies[i].length)
        }
    }

}
var datosFormulario = function () {
    var nombre = document.getElementById("GenSolNombre");
    var documento = document.getElementById("GenSolDocumento");
    var direccion = document.getElementById("GenSolDireccion");
    var telefono = document.getElementById("GenSolTelefono");
    var correo = document.getElementById("GenSolEmail");
    var tipoUsuario = document.getElementById("GenSolTipoUsuario");
    var cookie = getCookie()

    $.ajax({
        async: true,
        type: 'POST',
        data: {
            userId: cookie
        },
        url: 'scripts/uptc.edu.co.model/PHP/llenarDatosSolicitud.php',
        success: function (response) {
            datos = JSON.parse(response)
            nombre.setAttribute("placeholder", datos[0]);
            documento.setAttribute("placeholder", datos[1]);
            direccion.setAttribute("placeholder", datos[2]);
            telefono.setAttribute("placeholder", datos[3]);
            correo.setAttribute("placeholder", datos[4]);
            tipoUsuario.setAttribute("placeholder", datos[5]);
        }
    });

}

var fechaActual = function () {
    var fecha = new Date("2022-10-11");
    var dia = fecha.getDay();
    var mes = fecha.getMonth()+1;
    var año = fecha.getFullYear();

    var fechaActual = año+"-"+mes+"-"+dia;
    return fechaActual;

}

var comprobarDias = function (fechaInicio, fechaFin){
    var aux = false;
    if(fechaInicio.substring(5,7) === fechaActual().substring(5,7)){
        if((fechaInicio.substring(8,fechaInicio.length) - fechaActual().substring(8,fechaActual().length)) >= 8){
            aux = true;
        }
    } else if ((fechaInicio.substring(5,7) - fechaActual().substring(5,7)) === 1){
        if ((fechaInicio.substring(8,fechaInicio.length) - fechaActual().substring(8,fechaActual().length)) <= 23){
            aux = true;
        }
    } else if ((fechaInicio.substring(5,7) - fechaActual().substring(5,7)) > 1){
        aux = true;
    } else{
        aux = false;
    }
    return aux;
}

var nombreUsuario = function () {
    var cookie= getCookie()
    $.ajax({
        type: 'POST',
        data: {
            userId: cookie
        },
        url: 'scripts/uptc.edu.co.model/PHP/nombreUsuario.php',
        success: function (response) {
            var nombre = JSON.parse(response);
            document.getElementById("UserSession").innerText = nombre;
        }
    });
}

var cargarEscenarios = function () {
    var seccional = document.getElementById("seccional").value;
    $.ajax({
        type: 'POST',
        data: {
            sede: seccional
        },
        url: 'scripts/uptc.edu.co.model/PHP/cargarEscenarios.php',
        success: function (response) {
            datos = JSON.parse(response);
            var select = document.getElementById("escenario");
            select.innerHTML = ""
            var option = document.createElement("option")
            option.setAttribute("value", "");
            option.innerText = "Seleccione...";
            select.append(option)
            for (let i = 0; i < datos.length; i++) {
                var option = document.createElement("option")
                option.setAttribute("value", datos[i]);
                option.innerText = datos[i];
                select.append(option)
            }
        }
    });
}

var capturarDatosSolicitud = function () {
    var cookies=document.cookie.split(";")

    var idSolicitante = getCookie()
    //alert(idSolicitante)
    var seccional = document.getElementById("seccional").value;
    //alert(seccional);
    var escenario = document.getElementById("escenario").value;
    //alert(escenario);
    var descripcion = document.getElementById("GenSolDescripcion").value;
    //alert(descripcion);
    var fechaInicio = document.getElementById("GenSolFechaIni").value.substring(0, 10);
    //alert(fechaInicio);
    var fechaFin = document.getElementById("GenSolFechaFin").value.substring(0, 10);
    //alert(fechaFin);
    var horaInicio = document.getElementById("GenSolFechaIni").value.substring(11, 17);
    //alert(horaInicio);
    var horaFin = document.getElementById("GenSolFechaFin").value.substring(11, 17);
    //alert(horaFin);
    var firma = $('#GenSolFirma').prop("files")[0];
    var form_data = new FormData();
    form_data.append("firma", firma)
    //Añado los datos del fichero que voy a subir
    //En el lado del servidor puede obtener el archivo a traves de $_FILES["file"]

    //alert(firma)

    if(idSolicitante != "" && seccional != "" && escenario != "" && descripcion != "" && fechaInicio != "" && fechaFin != "" && horaInicio != "" && horaFin != "" && firma != "") {
        if (fechaActual() < fechaInicio && comprobarDias(fechaInicio, fechaFin) === true) {
            if(fechaInicio > fechaFin && horaInicio > horaFin || fechaInicio > fechaFin || fechaInicio <= fechaFin && horaInicio >= horaFin) {
                alert("Error en la fecha u hora seleccionada. Por favor verifique estos campos");
            } else if ((parseInt(horaFin.substring(0,2),10) - parseInt(horaInicio.substring(0,2),10)) === 0){
                alert("Error en las horas seleccionadas, recuerde que el prestamo de escenarios se realiza por mínimo 1 hora");
            } else if ((parseInt(horaFin.substring(0,2),10) - parseInt(horaInicio.substring(0,2),10)) === 1 && (parseInt(horaFin.substring(3,6),10) - parseInt(horaInicio.substring(3,6),10)) < 0){
                alert("Error en las horas seleccionadas, recuerde que el prestamo de escenarios se realiza por mínimo 1 hora");
            } else if ((parseInt(horaInicio.substring(0,2),10)) < 8 || (parseInt(horaFin.substring(0,2),10) >= 22 && (parseInt(horaFin.substring(3,6),10) > 0))) {
                alert("Error en las horas seleccionadas, la hora de inicio u hora de fin estan fuera del horario asignado para el prestamo de escenarios deportivos");
            } else if (escenario.includes("diurno") === true && (parseInt(horaFin.substring(0,2),10) >= 18 && (parseInt(horaFin.substring(3,6),10) > 0))){
                alert("La hora final del préstamo no corresponde a los horarios establecidos para el escenario seleccionado. Por favor verifique la hora final del préstamo")
            } else if (escenario.includes("nocturno") === true && (parseInt(horaFin.substring(0,2),10) >= 22 && (parseInt(horaFin.substring(3,6),10) > 0))
                || escenario.includes("nocturno") === true && (parseInt(horaInicio.substring(0,2),10) < 18)){
                alert("Las horas del préstamo no corresponde a los horarios establecidos para el escenario seleccionado. Por favor verifique las horas del préstamo")
            } else {
                $.ajax({
                    async: false,
                    type: 'POST',
                    data: {
                        idSolicitante: idSolicitante,
                        seccional: seccional,
                        escenario: escenario,
                        descripcion: descripcion,
                        fechaInicio: fechaInicio,
                        horaInicio: horaInicio,
                        fechaFin: fechaFin,
                        horaFin: horaFin,
                    },
                    url: 'scripts/uptc.edu.co.model/PHP/createLoanRequest.php',
                    success: function (response) {
                        if (response == 1) {
                            $.ajax({
                                type: 'POST',
                                data: form_data,
                                contentType: false,
                                processData: false,
                                url: 'scripts/uptc.edu.co.model/PHP/firma.php',
                                success: function (response) {
                                    if (response == 1) {
                                        alert("Solicitud creada, ahora debe subir los documentos de soporte")
                                        window.location.href = "applicantLoanRequestFiles.html"
                                    } else if (response == 2) {
                                        alert("Error al cargar el archivo, revise la subida")
                                    }
                                }
                            });
                        } else {
                            alert("Error al cargar la solicitud")
                        }
                    }
                });
            }
        }else {
            alert("La fecha inicial seleccionada no cumple con los requesitos minimos para generar la soliciitud de préstamo de escenarios deportivos")
        }
    }else{
        alert("Hay campos vacíos en el formulario")
    }
}