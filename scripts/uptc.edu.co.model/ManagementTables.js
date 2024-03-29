var getCookie = function () {
    var cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {

        if (i == 0 && cookies[i].substring(0, 7) == "userId=") {
            return cookies[i].substring(7, cookies[i].length)
        } else if (cookies[i].substring(0, 8) == " userId=") {
            return cookies[i].substring(8, cookies[i].length)
        }
    }

}

var documentos = function () {
    var tabla = document.getElementById("tableDocumentos");
    var tbody = document.createElement("tbody");
    var idUsuario = getCookie()

    $.ajax({
        async: true,
        type: 'POST',
        url: 'scripts/uptc.edu.co.model/PHP/documentosASubir.php',
        data: {
            'id': idUsuario
        },
        success: function (response) {
            response = JSON.parse(response)
            for (let i = 0; i < response.length; i++) {
                var dato = '"' + response[i] + '"'
                var datoVerificar = '"' + response[i] + 'doc"'
                var trow = document.createElement("tr");
                var th1 = document.createElement("td")
                th1.innerText = response[i];
                var th2 = document.createElement("td")
                th2.setAttribute("id", response[i])
                th2.innerText = "Sin cargar";
                var th3 = document.createElement("td")
                th3.innerHTML = "<input type=\"file\" class=\"form-control\" accept=\"application/pdf\" id=\"" + response[i] + "doc\" name=\"soporte\" onchange='cambiarEstado(" + dato + "),verificarPeso(" + datoVerificar + ","+dato+")'>";
                var th4 = document.createElement("td")
                th4.innerText = "none";
                trow.append(th1)
                trow.append(th2)
                trow.append(th3)
                trow.append(th4)
                tbody.append(trow)
                tabla.append(tbody)

            }
        }
    })

}
var cambiarEstado = function (id) {
    var estado = document.getElementById(id)
    estado.innerText = "Cargado"
}

var verificarPeso = function ( idInput, idText ) {

    var input = document.getElementById(idInput)
    if (input.files[0].size<650000){
        ;
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: "Peso del documento supera los 650Kb",
            footer: '<a>Intentelo de nuevo</a>'
        })
        input.value='';
        var estado = document.getElementById(idText)
        estado.innerText = "Sin cargar"
    }
}

var subirDocumentos = function () {
    var idUsuario = getCookie()

    $.ajax({
        async: true,
        type: 'POST',
        url: 'scripts/uptc.edu.co.model/PHP/documentosASubir.php',
        data: {
            'id': idUsuario
        },
        success: function (response) {
            response = JSON.parse(response)
            var form_data = new FormData();
            var count=0;
            var docsFaltantes="Faltan los siguientes documentos: "
            for (let i = 0; i < response.length; i++) {

                var doc = document.getElementById(response[i] + "doc").files[0]
                if (doc != null) {
                    form_data.append(""+response[i], doc)
                } else {
                    count+=1;
                    docsFaltantes+=response[i]+", "
                }
            }

            if (count==0){
                $.ajax({
                    type: 'POST',
                    url: 'scripts/uptc.edu.co.model/PHP/subirDocumentos.php',
                    data: form_data,
                    contentType: false,
                    processData: false,
                    success: function (response) {
                        Swal.fire(
                            'Excelente',
                            'Documentos subidos, ahora debe esperar la aprobación de su solicitud de préstamo, esta se le notificará al correo',
                            'success'
                        ).then(function (){
                            window.location.href="applicantMainView.html"
                        })

                    }
                });
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: docsFaltantes.substring(0, docsFaltantes.length-2),
                    footer: '<a></a>'
                })
            }
        }
    });


}