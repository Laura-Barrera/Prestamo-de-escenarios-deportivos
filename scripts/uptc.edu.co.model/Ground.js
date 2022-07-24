function Ground(id, nombre, descripcion, horaApertura, horaCierre) {
    this._id = id;
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._horaApertura = horaApertura;
    this._horaCierre = horaCierre;
}

Ground.prototype.mostrarEscenario=function (){
    alert(this._id);
}