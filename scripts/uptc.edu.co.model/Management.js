class Management{

    constructor(props) {
        this.controller = new Controller();
    }


    validacionLogin(user, password){
        if(user === "123" && password === "123"){
            return true;
        } else {
            return false;
        }
    }
}