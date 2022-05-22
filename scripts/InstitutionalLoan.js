class InstitutionalLoan {
    constructor(codigo, fecha, escenarioDeportivo, horaInicio, horaFin, descripcion) {
        this._codigo = codigo;
        this._fecha = fecha;
        this._escenarioDeportivo = escenarioDeportivo;
        this._horaInicio = horaInicio;
        this._horaFin = horaFin;
        this._descripcion = descripcion;
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(value) {
        this._codigo = value;
    }

    get fecha() {
        return this._fecha;
    }

    set fecha(value) {
        this._fecha = value;
    }

    get escenarioDeportivo() {
        return this._escenarioDeportivo;
    }

    set escenarioDeportivo(value) {
        this._escenarioDeportivo = value;
    }

    get horaInicio() {
        return this._horaInicio;
    }

    set horaInicio(value) {
        this._horaInicio = value;
    }

    get horaFin() {
        return this._horaFin;
    }

    set horaFin(value) {
        this._horaFin = value;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(value) {
        this._descripcion = value;
    }

    toStringInstitutionalLoan(){
        return InstitutionalLoan.toString()
    }
}