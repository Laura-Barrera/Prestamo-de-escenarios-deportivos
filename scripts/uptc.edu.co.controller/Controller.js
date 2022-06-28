class Controller {

    constructor() {
        this.mainPage = new MainPages();
        this.management = new Management();
    }

    enviarLogin(){
        const formInicio = document.getElementById("inicioSesión");
        formInicio.addEventListener("submit", e=>{
            var datos = this.mainPage.capturaLogin();
            console.log(datos[1]);
            return this.management.validacionLogin(datos[0], datos[1]);
        })
    }
}