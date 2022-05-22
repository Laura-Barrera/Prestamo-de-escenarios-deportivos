class Applicant extends User {
    constructor(numeroDocumento, nombre, apellido, telefono, correo, usuario, contrasena, tipoPersona) {
        super(numeroDocumento, nombre, apellido, telefono, correo, usuario, contrasena)
        this._tipoPersona = tipoPersona;
        this._solicitudesPrestamo = {}
        this._prestamos = {}
    }

    get tipoPersona() {
        return this._tipoPersona;
    }

    set tipoPersona(value) {
        this._tipoPersona = value;
    }

    get solicitudesPrestamo() {
        return this._solicitudesPrestamo;
    }

    set solicitudesPrestamo(value) {
        this._solicitudesPrestamo = value;
    }

    get prestamos() {
        return this._prestamos;
    }

    set prestamos(value) {
        this._prestamos = value;
    }

    toStringApplicant() {
        return Applicant.toString()
    }
}