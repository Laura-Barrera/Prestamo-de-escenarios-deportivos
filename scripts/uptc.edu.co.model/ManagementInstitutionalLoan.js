var cargarEscenarios = function () {
    var seccional = document.getElementById("PIseccional").value;
    $.ajax({
        type: 'POST',
        data: {
            sede: seccional
        },
        url: 'scripts/uptc.edu.co.model/PHP/cargarEscenarios.php',
        success: function (response) {
            datos = JSON.parse(response);
            var select = document.getElementById("PIescenario");
            select.innerHTML = "";
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

var fechaActual = function () {
    var hoy = new Date();
    var fechaActual = hoy.getFullYear() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getDate();
    return fechaActual;
}

var capDatosPI = function (){
    var fechaInicio = document.getElementById("PIfechainicio").value.substring(0, 10);
    var fechaFin = document.getElementById("PIfechafin").value.substring(0, 10);
    var horaInicio = document.getElementById("PIfechainicio").value.substring(11, 17);
    var horaFin = document.getElementById("PIfechafin").value.substring(11, 17);
    var descripcion = document.getElementById("PIdescripcion").value;
    var seccional = document.getElementById("PIseccional").value;
    var escenario = document.getElementById("PIescenario").value;

    if (fechaInicio!="" && fechaFin!="" && horaInicio!="" && horaFin!="" && descripcion!="" && seccional!="" && escenario!=""){
        if (fechaActual() < fechaInicio) {
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
            }else {
                $.ajax({
                    async: false,
                    type: 'POST',
                    url: 'scripts/uptc.edu.co.model/PHP/createInstitutionalLoan.php',
                    data: {
                        "codigoPrestamoInstitucional": 0,
                        fechaInicio: fechaInicio,
                        fechaFin: fechaFin,
                        horaInicio: horaInicio,
                        horaFin: horaFin,
                        descripcion: descripcion,
                        seccional: seccional,
                        escenario: escenario,
                    },
                    success: function (response) {
                        if (response == 1) {
                            alert("Préstamo creado correctamente")
                            window.location.href = "professionalCreateInstitutionalLoan.html"
                        } else {
                            alert("Error en el almacenamiento del préstamo institucional, intente nuevamente");
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