var verModificaciones = function (){
    var table = document.getElementById("tableModify");
    var tbody = document.getElementById("tbodyModify");

    $.ajax({
        async: true,
        type: 'POST',
        url: 'scripts/uptc.edu.co.model/PHP/viewModifications.php',
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

                if (valor[i][5] == 0){
                    var td5 = document.createElement("td");
                    td5.innerHTML = "<button type='button' id='modificar' style='border-color: white' onclick='crearCookie("+valor[i][0]+"); modificar()'><img src=\"media/editar.png\" width='25px'></button></a>";
                    tr.append(td5);

                    var td6 = document.createElement("td");
                    td6.innerText="";
                    tr.append(td6);
                }
                tbody.append(tr);
            }
            table.append(tbody);
        }
    });
}

var verCancelaciones = function (){
    var table = document.getElementById("tableModify");
    var tbody = document.getElementById("tbodyModify");

    $.ajax({
        async: true,
        type: 'POST',
        url: 'scripts/uptc.edu.co.model/PHP/viewCancellations.php',
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

                if (valor[i][5] == 1){
                    var td5 = document.createElement("td");
                    td5.innerText="";
                    tr.append(td5);

                    var td6 = document.createElement("td");
                    td6.innerHTML = "<button type='button' id='cancelar' style='border-color: white' onclick='crearCookie("+valor[i][0]+"), cancelar()'><img src=\"media/aprobar.png\" width='35px'></button>";
                    tr.append(td6);
                }
                tbody.append(tr);
            }
            table.append(tbody);
        }
    });
}

var crearCookie = function (id){
    document.cookie = 'Id=' + id + ';path=/';
}

var obtenerCookie = function (){
    var cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        if (i == 0 && cookies[i].substring(0, 3) == "Id=") {
            return cookies[i].substring(3, cookies[i].length)
        } else if (cookies[i].substring(0, 4) == " Id=") {
            return cookies[i].substring(4, cookies[i].length)
        }
    }
}

var cancelar = function (){
    var numCancelacion = obtenerCookie();

    $.ajax({
        async: true,
        type: 'POST',
        data: {
            numCancelacion: numCancelacion,
        },
        url: 'scripts/uptc.edu.co.model/PHP/approveCancel.php',
        success: function (response) {
            alert("Cancelacion realizada")
            window.location.href = "professionalRequests.html"
        }

    });

}

var modificar = function (){
    var numModificación = obtenerCookie();

    $.ajax({
        async: true,
        type: 'POST',
        data: {
            numModificación: numModificación,
        },
        url: 'scripts/uptc.edu.co.model/PHP/dataModification.php',
        success: function (response) {
            valor = JSON.parse(response)
            for (let i=0;i<valor.length;i++){
                console.log(valor[i])
            }
            pagina(numModificación, valor);
        }
    });
}

var infoModify = function (){
    var numModificación = obtenerCookie();

    $.ajax({
        async: true,
        type: 'POST',
        data: {
            numModificación: numModificación,
        },
        url: 'scripts/uptc.edu.co.model/PHP/infoModify.php',
        success: function (response) {
            valor = JSON.parse(response)
            document.getElementById("textModify").value = valor;
        }
    });
}

var pagina = function (numModificación, valor) {
    var title = document.getElementById("title").value = "Modificación de préstamo";
    var table = document.getElementById("tableModify").remove();
    var div = document.getElementById("mainTable")

    infoModify();

    div.innerHTML = "<div class=\"container\">\n" +
        "   <div class=\"row\">\n" +
        "       <div class=\"col-5\">\n" +
        "           <p style=\"font-size: medium\">Descripción Modificación:</p>\n" +
        "       </div>\n" +
        "       <div class=\"col-7\">\n" +
        "           <textarea autocomplete=\"on\" cols=\"100\" rows=\"5\" id=\"textModify\" disabled></textarea><br>\n" +
        "       </div>\n" +
        "   </div>\n" +
        "   <div class=\"row\">\n" +
        "       <div class=\"col-5\">\n" +
        "           <p style=\"font-size: medium\">Nombre Solicitante:</p>\n" +
        "       </div>\n" +
        "       <div class=\"col-7\">\n" +
        "           <input type=\"text\"\n" + "class=\"form-control\" id=\"GenSolNombre\" value='"+valor[0]+"' disabled><br>\n" +
        "       </div>\n" +
        "   </div>\n" +
        "   <div class=\"row\">\n" +
        "       <div class=\"col-5\">\n" +
        "           <p style=\"font-size: medium\">NIT y/o Cédula de ciudadanía:</p>\n" +
        "       </div>\n" +
        "       <div class=\"col-7\">\n" +
        "           <input type=\"text\"\n" + "class=\"form-control\" id=\"GenSolDocumento\" value='"+valor[1]+"' disabled><br>\n" +
        "       </div>\n" +
        "   </div>\n" +
        "   <div class=\"row\">\n" +
        "       <div class=\"col-5\">\n" +
        "           <p style=\"font-size: medium\">Dirección:</p>\n" +
        "       </div>\n" +
        "       <div class=\"col-7\">\n" +
        "           <input type=\"text\"\n" + "class=\"form-control\" id=\"GenSolDireccion\" value='"+valor[2]+"' disabled><br>\n" +
        "       </div>\n" +
        "   </div>\n" +
        "   <div class=\"row\">\n" +
        "       <div class=\"col-5\">\n" +
        "           <p style=\"font-size: medium\">Telefono:</p>\n" +
        "       </div>\n" +
        "       <div class=\"col-7\">\n" +
        "           <input type=\"number\"\n" + "class=\"form-control\" id=\"GenSolTelefono\" value='"+valor[3]+"' disabled><br>\n" +
        "       </div>\n" +
        "   </div>\n" +
        "   <div class=\"row\">\n" +
        "       <div class=\"col-5\">\n" +
        "           <p style=\"font-size: medium\">Correo Electrónico:</p>\n" +
        "       </div>\n" +
        "       <div class=\"col-7\">\n" +
        "           <input type=\"email\"\n" + "class=\"form-control\" id=\"GenSolEmail\" value='"+valor[4]+"' disabled><br>\n" +
        "       </div>\n" +
        "   </div>\n" +
        "   <div class=\"row\">\n" +
        "       <div class=\"col-5\">\n" +
        "           <p style=\"font-size: medium\">Tipo de usuario:</p>\n" +
        "       </div>\n" +
        "       <div class=\"col-7\">\n" +
        "           <input type=\"text\"\n" + "class=\"form-control\" id=\"GenSolTipoUsuario\" value='"+valor[5]+"' disabled><br>\n" +
        "       </div>\n" +
        "   </div>\n" +
        "   <div class=\"row\">\n" +
        "       <div class=\"col-5\">\n" +
        "           <p style=\"font-size: medium\">Seccional</p>\n" +
        "       </div>\n" +
        "       <div class=\"col-7\">\n" + //Other method for cargar escenarios
        "           <select class=\"form-select\" aria-label=\"seccional\" id=\"seccional\" onchange=\"cargarEscenarios()\">\n" +
        "               <option selected>Seleccione...</option>\n" +
        "               <option value=\"Tunja\">Tunja</option>\n" +
        "               <option value=\"Sogamoso\">Sogamoso</option>\n" +
        "               <option value=\"Duitama\">Duitama</option>\n" +
        "               <option value=\"Chiquinquira\">Chiquinquira</option>\n" +
        "           </select><br>\n" +
        "       </div>\n" +
        "   </div>\n" +
        "   <div class=\"row\">\n" +
        "       <div class=\"col-5\">\n" +
        "           <p style=\"font-size: medium\">Escenario deportivo</p>\n" +
        "       </div>\n" +
        "       <div class=\"col-7\">\n" +
        "           <select class=\"form-select\" aria-label=\"tipo usuario\" id=\"escenario\" >\n" +
        "               <option selected>Seleccione...</option>\n" + "\n" +
        "           </select><br>\n" +
        "       </div>\n" +
        "   </div>\n" +
        "   <div class=\"row\">\n" +
        "       <div class=\"col-5\">\n" +
        "           <p style=\"font-size: medium\">Descripción:</p>\n" +
        "       </div>\n" +
        "       <div class=\"col-7\">\n" +
        "           <textarea class=\"form-control\"\n" + "rows=\"4\" id=\"GenSolDescripcion\" disabled>"+valor[8]+"</textarea><br>\n" +
        "       </div>\n" +
        "   </div>\n" + "\n" +
        "   <div class=\"row\">\n" +
        "       <div class=\"col-5\">\n" +
        "           <p style=\"font-size: medium\">Fecha Inicio Evento:</p>\n" +
        "       </div>\n" +
        "       <div class=\"col-7\">\n" +
        "           <input type=\"datetime-local\" placeholder=\"Fecha Inicio\"\n" + "class=\"form-control\" id=\"GenSolFechaIni\" value='"+valor[9]+"'><br>\n" +
        "       </div>\n" +
        "   </div>\n" + "\n" +
        "   <div class=\"row\">\n" +
        "       <div class=\"col-5\">\n" +
        "           <p style=\"font-size: medium\">Fecha Fin Evento:</p>\n" +
        "       </div>\n" +
        "       <div class=\"col-7\">\n" +
        "           <input type=\"datetime-local\" placeholder=\"Fecha Fin\"\n" + "class=\"form-control\" id=\"GenSolFechaFin\" value='"+valor[10]+"'><br>\n" +
        "       </div>\n" +
        "   </div>" +
        "   <div class=\"row align-items-center\">\n" +
        "       <div class=\"col-12 text-end\">\n" +"<br>\n" +
        "           <a href=\"professionalRequests.html\"><button type=\"button\"\n" + "class=\"btn btn-warning\" onclick=\"guardarModificacion()\">Guardar" + "</button></a>\n" +
        "           <a href=\"professionalRequests.html\"><button type=\"button\"\n"+ "class=\"btn btn-warning\">Cancelar</button></a>" +
        "       </div>\n" +
        "   </div>" +
        "</div>"

    document.getElementById("seccional").value = valor[6]
    cargarEscenarios();
    document.getElementById("escenario").value= valor[7]

}

var guardarModificacion = function (){
    var numModificación = obtenerCookie();

    var seccional = document.getElementById("seccional").value;
    var escenario = document.getElementById("escenario").value;
    var fechaInicio = document.getElementById("GenSolFechaIni").value.substring(0, 10);
    var fechaFin = document.getElementById("GenSolFechaFin").value.substring(0, 10);
    var horaInicio = document.getElementById("GenSolFechaIni").value.substring(11, 17);
    var horaFin = document.getElementById("GenSolFechaFin").value.substring(11, 17);

    $.ajax({
        async: true,
        type: 'POST',
        data: {
            numModificación: numModificación,
            seccional: seccional,
            escenario: escenario,
            fechaInicio: fechaInicio,
            horaInicio: horaInicio,
            fechaFin: fechaFin,
            horaFin: horaFin,
        },
        url: 'scripts/uptc.edu.co.model/PHP/saveModification.php',
        success: function (response) {
            valor = JSON.parse(response)
            console.log(valor)
        }
    });
}