var nombre = function (){
    var cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {

        if (i == 0 && cookies[i].substring(0, 7) == "userId=") {
            return cookies[i].substring(7, cookies[i].length)
        } else if (cookies[i].substring(0, 8) == " userId=") {
            return cookies[i].substring(8, cookies[i].length)
        }
    }
}

var solicitudes = function (){
    var tabla = document.getElementById("tableLoans");
    var tbody = document.getElementById("tbodyLoans");

    $.ajax({
        async: true,
        type: 'POST',
        data: {
            userId: nombre()
        },
        url: 'scripts/uptc.edu.co.model/PHP/viewRequest.php',
        success: function (response) {
            valor = JSON.parse(response);

            for (let i=0;i<valor.length;i++){
                var tr = document.createElement("tr");

                var td0 = document.createElement("td");
                td0.innerText=valor[i][0];
                tr.append(td0);

                var td1 = document.createElement("td");
                td1.innerText=valor[i][1];
                tr.append(td1);

                var td2 = document.createElement("td");
                td2.innerText=valor[i][2];
                tr.append(td2);

                var td3 = document.createElement("td");
                td3.innerText=valor[i][3];
                tr.append(td3);

                var td4 = document.createElement("td");
                td4.innerText=valor[i][4];
                tr.append(td4);

                var td5 = document.createElement("td");
                td5.innerText=valor[i][5];
                tr.append(td5);

                var td6 = document.createElement("td");
                td6.innerText=valor[i][6];
                tr.append(td6);

                var td7 = document.createElement("td");
                td7.innerText=valor[i][7];
                tr.append(td7);

                var td8 = document.createElement("td");
                td8.innerText=valor[i][8];
                tr.append(td8);

                if(valor[i][7] != "No autorizado" & valor[i][7] != "Cancelado" & valor[i][1] >= fechaActual()){
                    var td9 = document.createElement("td");
                    td9.innerHTML = "<a href='applicantModifyLoan.html'><button type='button' id='modificar' style='border-color: white' onclick='createCookie("+valor[i][0]+")'><img src=\"media/editar.png\" width='25px'></button></a>";
                    tr.append(td9);

                    var td10 = document.createElement("td");
                    td10.innerHTML= "<button type='button' style='border-color: white' onclick='createCookie("+valor[i][0]+"), saveCancelation()'><img src=\"media/cancelar.png\" width='25px'></button></a>";
                    tr.append(td10);
                }

                tbody.append(tr);
            }
            tabla.append(tbody);
        }
    });
}

var createCookie = function (idPrestamo){
    document.cookie = 'loanId=' + idPrestamo + ';path=/';
}

var codigoPrestamo = function (){
    var cod = document.getElementById("codPrestamo");
    var cookies = document.cookie.split(';');
    var aux;
    for (let i = 0; i < cookies.length; i++) {
        if (i == 0 && cookies[i].substring(0, 7) == "loanId=") {
            aux = cookies[i].substring(7, cookies[i].length)
        } else if (cookies[i].substring(0, 8) == " loanId=") {
            aux = cookies[i].substring(8, cookies[i].length)
        }
    }
    cod.innerText = "Código Préstamo = "+aux;
}

var deleteCookie = function (){
    var cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        if (i == 0 && cookies[i].substring(0, 7) == "loanId=") {
            document.cookie = "loanId=; max-age=0";
        } else if (cookies[i].substring(0, 8) == " loanId=") {
            document.cookie = "loanId=; max-age=0";
        }
    }
}

var fechaActual = function () {
    var hoy = new Date();
    var fechaActual = hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getDate();
    return fechaActual;
}

var saveModification = function (){
    var cookies = document.cookie.split(';');
    var codigoPrestamo;
    for (let i = 0; i < cookies.length; i++) {
        if (i == 0 && cookies[i].substring(0, 7) == "loanId=") {
            codigoPrestamo = cookies[i].substring(7, cookies[i].length)
        } else if (cookies[i].substring(0, 8) == " loanId=") {
            codigoPrestamo = cookies[i].substring(8, cookies[i].length)
        }
    }
    var descripcion = document.getElementById("textModification").value;
    var fechaPeticion = fechaActual();
    var estadoModificacion = "Pendiente";

    if (descripcion != ""){
        $.ajax({
            async: false,
            type: 'POST',
            url: 'scripts/uptc.edu.co.model/PHP/createModification.php',
            data: {
                numModificación: 0,
                descripcion: descripcion,
                fechaPeticion: fechaPeticion,
                estadoModificacion: estadoModificacion,
                codigoPrestamo: codigoPrestamo,
            },
            success: function (response) {
                if (response == 1) {
                    alert("Solicitud de modificacion creada con exito")
                    window.location.href = "applicantActiveLoans.html"
                } else if (response == 2){
                    alert("La modificacion no se puede almacenar porque ya existe una solicitud de modificacion para la misma solicitud o préstamo");
                } else {
                    alert("Error, no se ha podido guardar con exito la solicitud de modificación")
                    window.location.href="applicantActiveLoans.html"
                }
            }

        });
    } else {
        alert("Hay campos vacíos en el formulario")
    }
}

var saveCancelation = function (){
    var cookies = document.cookie.split(';');
    var codigoPrestamo;

    for (let i = 0; i < cookies.length; i++) {
        if (i == 0 && cookies[i].substring(0, 7) == "loanId=") {
            codigoPrestamo = cookies[i].substring(7, cookies[i].length)
        } else if (cookies[i].substring(0, 8) == " loanId=") {
            codigoPrestamo = cookies[i].substring(8, cookies[i].length)
        }
    }
    var fechaPeticion = fechaActual();
    var estadoCancelacion = "Pendiente";

    $.ajax({
            async: false,
            type: 'POST',
            url: 'scripts/uptc.edu.co.model/PHP/createCancelation.php',
            data: {
                numCancelacion: 0,
                fechaPeticion: fechaPeticion,
                estadoCancelacion: estadoCancelacion,
                codigoPrestamo: codigoPrestamo,
            },
            success: function (response) {
                if (response == 1) {
                    alert("Solicitud de cancelacion creada con exito")
                } else if (response == 2){
                    alert("La cancelacion no se puede almacenar porque ya existe una solicitud de cancelacion para la misma solicitud o préstamo")
                } else {
                    alert("Error, no se ha podido guardar con exito la solicitud de cancelación")
                }
            }

        });
}