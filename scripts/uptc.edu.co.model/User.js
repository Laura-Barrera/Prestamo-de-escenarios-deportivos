<<<<<<< HEAD
function User (numeroDocumento, nombre, apellido, direccion, telefono, correo, usuario, contrasena) {
    /*this._numeroDocumento = numeroDocumento;
    this._nombre = nombre;
    this._apellido = apellido;
    this._telefono = telefono;
    this._correo = correo;
    this._usuario = usuario;
    this._contrasena = contrasena;*/
}


=======
class User {
    constructor(numeroDocumento, nombre, apellido, telefono, correo, usuario, contrasena, codigoProfesional, tipoPersona) {
        this._numeroDocumento = numeroDocumento;
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
        this._correo = correo;
        this._usuario = usuario;
        this._contrasena = contrasena;
        this._codigoProfesional = codigoProfesional;
        this._tipoPersona = tipoPersona;
    }

    get numeroDocumento() {
        return this._numeroDocumento;
    }

    set numeroDocumento(value) {
        this._numeroDocumento = value;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(value) {
        this._apellido = value;
    }

    get telefono() {
        return this._telefono;
    }

    set telefono(value) {
        this._telefono = value;
    }

    get correo() {
        return this._correo;
    }

    set correo(value) {
        this._correo = value;
    }

    get usuario() {
        return this._usuario;
    }

    set usuario(value) {
        this._usuario = value;
    }

    get contrasena() {
        return this._contrasena;
    }

    set contrasena(value) {
        this._contrasena = value;
    }

    get codigoProfesional() {
        return this._codigoProfesional;
    }

    set codigoProfesional(value) {
        this._codigoProfesional = value;
    }

    get tipoPersona() {
        return this._tipoPersona;
    }

    set tipoPersona(value) {
        this._tipoPersona = value;
    }

    toStringUser() {
        return User.toString()
    }
}
>>>>>>> 798d0c5d950f6f2d77e01098a2d4e3aded2902d9
