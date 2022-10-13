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
                    success: function (nombre){
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
                    success: function (datosEscenario){
                        datosEscenario=JSON.parse(datosEscenario)
                        td5.innerText = datosEscenario[0];
                        td6.innerText = datosEscenario[1];
                    }
                });
                var td7 = document.createElement("td");
                td7.innerText = response[i][5];
                var td8 = document.createElement("td");
                td8.innerText = response[i][6];
                var td9 = document.createElement("td");
                td9.innerHTML= '<button type="button" className="btn btn-warning" onClick="verFormulario('+response[i][0]+')">Ver formulario</button>'
                var td10 = document.createElement("td");
                td10.innerHTML= '<button type="button" className="btn btn-warning" onClick="descargarSoportes('+response[i][0]+')">Descargar soportes</button>'
                trow.append(td1);
                trow.append(td2);
                trow.append(td3);
                trow.append(td4);
                trow.append(td5);
                trow.append(td6);
                trow.append(td7);
                trow.append(td8);
                trow.append(td9);
                trow.append(td10)
                tbody.append(trow)
            }

            tablaSolicitudes.append(tbody)
        }
    });
}

var verFormulario=function (idSolicitud){
    window.location.href="index.html"
    alert(idSolicitud)
}
var descargarSoportes=function (idSolicitud){
    window.location.href="index.html"
    alert(idSolicitud)
    var text=document.getElementById("LOGusuario").innerText=idSolicitud
    alert(text)
}