var SportsProfessional = function (numeroDocumento, nombre, apellido, telefono, correo, usuario, contrasena, codigo) {
    this.numeroDocumento = numeroDocumento
    this.nombre = nombre
    this.apellido = apellido
    this.telefono = telefono
    this.correo = correo
    this.usuario = usuario
    this.contrasena = contrasena
    this._solicitudesPrestamo = {}
    this._prestamosInstitucionales = {}
    this._codigo = codigo;
}
SportsProfessional.prototype=new User();
