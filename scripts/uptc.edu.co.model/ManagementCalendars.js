

var visualizarPrestamos = function (){
    var date = document.getElementById('prueba').getAttribute('date')
    var tabla= document.getElementById('tablaProgramacion')
    var tbody = document.getElementById('tbody')
    tbody.innerHTML=""
    if (date!=null){
        $.ajax({
            async: false,
            type: 'POST',
            data: {
                fecha:date
            },
            url: 'scripts/uptc.edu.co.model/PHP/searchProgra.php',
            success: function (response) {
                response=JSON.parse(response)
                for (let i = 0; i < response.length; i++) {
                    var trow=document.createElement('tr')
                    var fecha = document.createElement('td')
                    fecha.innerText=response[i][0]
                    var escenario = document.createElement('td')
                    escenario.innerText=response[i][1]
                    var seccional = document.createElement('td')
                    seccional.innerText=response[i][2]
                    trow.append(fecha)
                    trow.append(escenario)
                    trow.append(seccional)
                    tbody.append(trow)
                }
                tabla.append(tbody)
            }
        })
    }else{
    }

}