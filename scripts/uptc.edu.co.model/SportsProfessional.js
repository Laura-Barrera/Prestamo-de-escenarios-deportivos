class SportsProfessional extends User {
    constructor(numeroDocumento, nombre, apellido, telefono, correo, usuario, contrasena, codigo) {
        super(numeroDocumento, nombre, apellido, telefono, correo, usuario, contrasena);
        this._solicitudesPrestamo = {}
        this._prestamosInstitucionales = {}
        this._codigo = codigo;
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(value) {
        this._codigo = value;
    }

    get solicitudesPrestamo() {
        return this._solicitudesPrestamo;
    }

    set solicitudesPrestamo(value) {
        this._solicitudesPrestamo = value;
    }

    get prestamosInstitucionales() {
        return this._prestamosInstitucionales;
    }

    set prestamosInstitucionales(value) {
        this._prestamosInstitucionales = value;
    }

    toStringSportsProfessional() {
        return SportsProfessional.toString();
    }
}