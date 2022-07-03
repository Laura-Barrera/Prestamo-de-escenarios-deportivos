var Applicant = function (numeroDocumento, nombre, apellido, telefono, correo, usuario, contrasena, tipoPersona) {

    this.numeroDocumento = numeroDocumento
    this.nombre = nombre
    this.apellido = apellido
    this.telefono = telefono
    this.correo = correo
    this.usuario = usuario
    this.contrasena = contrasena
    this._tipoPersona = tipoPersona
    this._solicitudesPrestamo = {}
    this._prestamos = {}
    User.prototype.constructor.call(this.numeroDocumento, this.nombre, this.apellido, this.telefono, this.correo, this.usuario, this.contrasena)
}
Applicant.prototype=new User();