//Conexion BD
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'prestamo_escenarios_uptc'
});
connection.connect((err) => {
    if (err) throw err
    console.log("La conexion es exitosa")
})

//Prueba informacion
connection.query('select * from usuario',
    (err,rows) => {
    if (err) throw err
    console.log(rows)});

function solicitante(){
    connection.query('select @datos = usuario, contraseña from usuario where numUsuario = 1', (err,rows) =>{
        if (err) throw err
        console.log(rows)
    })
}

//Cierre de conexion
connection.end();