class MainPages{
    constructor () {
        this.controller = new Controller();
    }

    capturaLogin() {
        var user = document.getElementById("userLogin").value;
        var password = document.getElementById("passwordLogin").value;
        console.log(user, password);
        return [user, password];
    }
}
