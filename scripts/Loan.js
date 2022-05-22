class Loan {
    constructor(codigo, fechaInicio, fechaFin, costo, estado, horaInicio, horaFin, solicitante, escenarioDeportivo) {
        this._codigo = codigo;
        this._fechaInicio = fechaInicio;
        this._fechaFin = fechaFin;
        this._costo = costo;
        this._estado = estado;
        this._horaInicio = horaInicio;
        this._horaFin = horaFin;
        this._solicitante = solicitante;
        this._escenarioDeportivo = escenarioDeportivo;
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(value) {
        this._codigo = value;
    }

    get fechaInicio() {
        return this._fechaInicio;
    }

    set fechaInicio(value) {
        this._fechaInicio = value;
    }

    get fechaFin() {
        return this._fechaFin;
    }

    set fechaFin(value) {
        this._fechaFin = value;
    }

    get costo() {
        return this._costo;
    }

    set costo(value) {
        this._costo = value;
    }

    get estado() {
        return this._estado;
    }

    set estado(value) {
        this._estado = value;
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

    get solicitante() {
        return this._solicitante;
    }

    set solicitante(value) {
        this._solicitante = value;
    }

    get escenarioDeportivo() {
        return this._escenarioDeportivo;
    }

    set escenarioDeportivo(value) {
        this._escenarioDeportivo = value;
    }

    toStringLoan() {
        return Loan.toString();
    }
}