function validarDatos(){
    const usuario = document.getElementById("userLogin").value;
    const contraseña = document.getElementById("passwordLogin").value;
    if(usuario === "solicitante" && contraseña === "1234"){
        alert("Acceso correcto");
        window.location.href = "applicantMainView.html";
    } else if(usuario === "profesional" && contraseña === "1234"){
        alert("Acceso correcto");
        window.location.href = "professionalMainView.html";
    } else {
        alert("Datos incorrectos");
    }
}