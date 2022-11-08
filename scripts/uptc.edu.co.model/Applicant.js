function Applicant(numeroDocumento, nombre, apellido, direccion, telefono, correo, usuario, contrasena, tipoPersona) {

    this.numeroDocumento = numeroDocumento
    this.nombre = nombre
    this.apellido = apellido
    this.direccion = direccion
    this.telefono = telefono
    this.correo = correo
    this.usuario = usuario
    this.contrasena = contrasena
    this._tipoPersona = tipoPersona
    this._solicitudesPrestamo = {}
    this._prestamos = {}
    User.prototype.constructor.call(this.numeroDocumento, this.nombre, this.apellido, this.direccion,this.telefono, this.correo, this.usuario, this.contrasena)
}

Applicant.prototype = new User();

Applicant.prototype.addSolicitante = function () {

    $.ajax({
        type: 'POST',
        url: 'scripts/uptc.edu.co.model/PHP/addApplicant.php',
        data: {
            numUsuario: 0,
            documento: this.numeroDocumento,
            nombre: this.nombre,
            apellido: this.apellido,
            direccion: this.direccion,
            telefono: this.telefono,
            correoelectronico: this.correo,
            usuario: this.usuario,
            contraseña: this.contrasena,
            codigoProfesional: "NULL",
            tipoPersona: this._tipoPersona
        },
        success: function (response) {
            if (response==0){
                alert("Usuario Creado")
                window.location.href = "index.html";
            }else{
                alert("Error: Documento, usuario o correo ya existe en el sistema")
            }
        }
    });

}