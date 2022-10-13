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

                var td9 = document.createElement("td");
                td9.innerHTML = "<a href='applicantLoanRequest.html'><button type='button' id='modificar' style='border-color: white' onclick='createCookie()'><img src=\"media/editar.png\" width='25px'></button></a>";
                tr.append(td9);

                tbody.append(tr);
            }
            table.append(tbody);
        }
    });
}

var verCancelaciones = function (){
    var table = document.getElementById("tableCancel");
    var tbody = document.getElementById("tbodyCancel");

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

                var td9 = document.createElement("td");
                td9.innerHTML = "<button type='button' id='cancelar' style='border-color: white' onclick='crearCookie("+valor[i][0]+"), cancelar()'><img src=\"media/aprobar.png\" width='35px'></button>";
                tr.append(td9);

                tbody.append(tr);
            }
            table.append(tbody);
        }
    });
}

var crearCookie = function (id){
    document.cookie = 'Id=' + id + ';path=/';
}

var cancelar = function (){
    var cookies = document.cookie.split(';');
    var numCancelacion;
    for (let i = 0; i < cookies.length; i++) {
        if (i == 0 && cookies[i].substring(0, 3) == "Id=") {
            numCancelacion = cookies[i].substring(3, cookies[i].length)
        } else if (cookies[i].substring(0, 4) == " Id=") {
            numCancelacion = cookies[i].substring(4, cookies[i].length)
        }
    }

    $.ajax({
        async: true,
        type: 'POST',
        data: {
            numCancelacion: numCancelacion,
        },
        url: 'scripts/uptc.edu.co.model/PHP/approveCancel.php',
        success: function (response) {

        }
    });

}

var modificar = function (){
    var cookies = document.cookie.split(';');
    var numCancelacion;
    for (let i = 0; i < cookies.length; i++) {
        if (i == 0 && cookies[i].substring(0, 3) == "Id=") {
            numCancelacion = cookies[i].substring(3, cookies[i].length)
        } else if (cookies[i].substring(0, 4) == " Id=") {
            numCancelacion = cookies[i].substring(4, cookies[i].length)
        }
    }

    var pagina = window.location.href = "applicantLoanRequest.html"

    $.ajax({
        async: true,
        type: 'POST',
        data: {
            numCancelacion: numCancelacion,
        },
        url: 'scripts/uptc.edu.co.model/PHP/infoCancel.php',
        success: function (response) {
            valor = JSON.parse(response);
            title.setAttribute("text", "numCancelacion");
            text.setAttribute("text", valor[0]);
        }
    });

    var div = document.getElementById("divTable");
    div.append(pagina);
}