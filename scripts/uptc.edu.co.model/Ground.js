class Ground{
    constructor(id, nombre, descripcion, horaApertura, horaCierre) {
        this._id = id;
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._horaApertura = horaApertura;
        this._horaCierre = horaCierre;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(value) {
        this._descripcion = value;
    }

    get horaApertura() {
        return this._horaApertura;
    }

    set horaApertura(value) {
        this._horaApertura = value;
    }

    get horaCierre() {
        return this._horaCierre;
    }

    set horaCierre(value) {
        this._horaCierre = value;
    }

    toStringGround(){
        return Ground.toString();
    }
}