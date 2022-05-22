class Request {
    constructor(codigo, fechaIngreso, fechaInicio, fechaFin, escenario, horaInicio, horaFin) {
        this._codigo = codigo;
        this._fechaIngreso = fechaIngreso;
        this._fechaInicio = fechaInicio;
        this._fechaFin = fechaFin;
        this._escenario = escenario;
        this._horaInicio = horaInicio;
        this._horaFin = horaFin;
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(value) {
        this._codigo = value;
    }

    get fechaIngreso() {
        return this._fechaIngreso;
    }

    set fechaIngreso(value) {
        this._fechaIngreso = value;
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

    get escenario() {
        return this._escenario;
    }

    set escenario(value) {
        this._escenario = value;
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

    toStringRequest() {
        return Request.toString();
    }
}