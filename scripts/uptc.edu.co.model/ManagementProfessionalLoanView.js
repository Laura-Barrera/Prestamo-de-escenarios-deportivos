var cargarSolicitudes = function () {
    var tablaSolicitudes = document.getElementById("tableProfesionalLoanRequest");
    var tbody = document.createElement("tbody");

    $.ajax({
        type: 'GET',
        url: 'scripts/uptc.edu.co.model/PHP/mostrarSolicitudes.php',
        success: function (response) {
            response = JSON.parse(response)
            for (let i = 0; i < response.length; i++) {
                var trow = document.createElement("tr");
                var td1 = document.createElement("td");
                td1.innerText = response[i][0];
                var td2 = document.createElement("td");
                $.ajax({
                    async: false,
                    type: 'POST',
                    url: 'scripts/uptc.edu.co.model/PHP/nombreUsuario.php',
                    data: {
                        userId: response[i][1]
                    },
                    success: function (nombre) {
                        td2.innerText = JSON.parse(nombre);
                    }
                })
                var td3 = document.createElement("td");
                td3.innerText = response[i][2];
                var td4 = document.createElement("td");
                td4.innerText = response[i][3];
                var td5 = document.createElement("td");

                var td6 = document.createElement("td");

                $.ajax({
                    async: false,
                    type: 'POST',
                    url: 'scripts/uptc.edu.co.model/PHP/datosEscenario.php',
                    data: {
                        idEscenario: response[i][4]
                    },
                    success: function (datosEscenario) {
                        datosEscenario = JSON.parse(datosEscenario)
                        td5.innerText = datosEscenario[0];
                        td6.innerText = datosEscenario[1];
                    }
                });
                var td7 = document.createElement("td");
                td7.innerText = response[i][5];
                var td8 = document.createElement("td");
                td8.innerText = response[i][6];
                var td9 = document.createElement("td");
                td9.innerHTML = '<button type="button" className="btn btn-warning" onClick="verFormulario(' + response[i][0] + ')">Ver formulario</button>'
                trow.append(td1);
                trow.append(td2);
                trow.append(td3);
                trow.append(td4);
                trow.append(td5);
                trow.append(td6);
                trow.append(td7);
                trow.append(td8);
                trow.append(td9);
                tbody.append(trow)
            }

            tablaSolicitudes.append(tbody)
        }
    });
}

var verFormulario = function (idSolicitud) {
    window.location.href = "ProfessionalApplicantLoanRequest.html"
    document.cookie = 'idSolAprobar=' + idSolicitud + ';path=/'
}

var cargarDatosSolicitud = function () {
    var nombre = document.getElementById("GenSolNombre");
    var cedula = document.getElementById("GenSolDocumento");
    var direccion = document.getElementById("GenSolDireccion");
    var telefono = document.getElementById("GenSolTelefono");
    var correo = document.getElementById("GenSolEmail");
    var tipoUsuario = document.getElementById("GenSolTipoUsuario");
    var seccional = document.getElementById("seccional");
    var escenario = document.getElementById("escenario");
    var descripcion = document.getElementById("GenSolDescripcion");
    var fechaInicio = document.getElementById("GenSolFechaIni");
    var fechaFin = document.getElementById("GenSolFechaFin");
    $.ajax({
        async: false,
        type: 'POST',
        url: 'scripts/uptc.edu.co.model/PHP/solicitudAprobar.php',
        data: {
            prestamo: getCookieSolicitud()
        },
        success: function (response) {
            var datos = JSON.parse(response)
            nombre.setAttribute("placeholder", datos[0])
            cedula.setAttribute("placeholder", datos[1])
            direccion.setAttribute("placeholder", datos[2])
            telefono.setAttribute("placeholder", datos[3])
            correo.setAttribute("placeholder", datos[4])
            tipoUsuario.setAttribute("placeholder", datos[5])
            seccional.innerHTML = "<option selected>" + datos[6] + "</option>"
            escenario.innerHTML = "<option selected>" + datos[7] + "</option>"
            descripcion.setAttribute("placeholder", datos[8])
            fechaInicio.value = datos[9] + "T" + datos[11]
            fechaFin.value = datos[10] + "T" + datos[12]
        }
    })
}

var getCookieSolicitud = function () {
    var cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {

        if (i == 0 && cookies[i].substring(0, 13) == "idSolAprobar=") {
            return cookies[i].substring(13, cookies[i].length)
        } else if (cookies[i].substring(0, 14) == " idSolAprobar=") {
            return cookies[i].substring(14, cookies[i].length)
        }
    }

}
var descargarSoportes = function () {
    var div = document.getElementById("soportes");
    $.ajax({
        async: false,
        type: 'POST',
        url: 'scripts/uptc.edu.co.model/PHP/buscarDocsSolicitud.php',
        data: {
            idSolicitud: getCookieSolicitud()
        },
        success: function (response) {
            response=JSON.parse(response)
            div.innerHTML+='<button type="button" class="btn btn-secondary col-12" onclick=window.location.href="scripts/uptc.edu.co.model/PHP/download_firma.php?idSolicitud='+getCookieSolicitud()+'\">firma' +
                '                                                        </button>'
            div.innerHTML+='<h1></h1>'
            for (i in response){
                div.innerHTML+='<button type="button" class="btn btn-secondary col-12" onclick=window.location.href="scripts/uptc.edu.co.model/PHP/downloadDocumentos.php?idSolicitud='+getCookieSolicitud()+'&nombreDoc='+response[i]+'">'+response[i].substring(getCookieSolicitud().length,response[i].length)+'\n' +
                    '                                                        </button>'
                div.innerHTML+='<h1></h1>'
            }
        }
    })
    //window.location.href="scripts/uptc.edu.co.model/PHP/download_firma.php?idSolicitud="+idSolicitud;
    //window.location.href="scripts/uptc.edu.co.model/PHP/downloadDocumentos.php?idSolicitud="+idSolicitud;

}

var aprobar=function (){
    var idSolicitud=getCookieSolicitud();
    $.ajax({
        async: false,
        type: 'POST',
        url: 'scripts/uptc.edu.co.model/PHP/aprobarSolicitud.php',
        data: {
            idSolicitud: idSolicitud
        },
        success: function (response){
            if (response==1){
                //espacio para correo que se aprobó
                Swal.fire({
                    title: '¿Desea aprobar este préstamo?',
                    text: "Déspues de aprobado no es posible eliminar la aprobación",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, aprobar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Préstamo aprobado',
                            'Se le notificará al solicitante a través del correo la aprobación de su solicitud',
                            'success'
                        ).then(function (){
                            window.location.href="professionalLoanRequestView.html"
                        })

                    }
                })

            }else if(response==2){
                //notificar por correo lo sucedido
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ya hay un prestamo aprobado que se sobrepone con las horas de esta solicitud',
                    footer: '<a></a>'
                })
            }
        }
    })
}
var denegar=function (){
    var idSolicitud=getCookieSolicitud();
    $.ajax({
        async: false,
        type: 'POST',
        url: 'scripts/uptc.edu.co.model/PHP/denegarSolicitud.php',
        data: {
            idSolicitud: idSolicitud
        },
        success: function (response){
            if (response==1){
                //espacio para correo explicando denegación
                Swal.fire({
                    title: '¿Desea cancelar este préstamo?',
                    text: "Déspues de cancelado no es posible eliminar la cancelación",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, cancelar',
                    cancelButtonText: 'Volver'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Préstamo cancelado',
                            'Se le notificará al solicitante a través del correo la cancelación de su solicitud',
                            'success'
                        ).then(function (){
                            window.location.href="professionalLoanRequestView.html"
                        })
                    }
                })

            }else{
                //notificar por correo lo sucedido
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El prestamo no ha sido cancelado',
                    footer: '<a></a>'
                })
            }
        }
    })
}