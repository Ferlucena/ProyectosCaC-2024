/**
 * Crearemos un servidor con el módulo express
 * 1- nmp init -y
 * 2- npm install express --save
 * 3- Avanzamos con el código del servidor
 **/

//1- Importacion de los módulos
const express = require('express');

//2- Creamos una instancia de express
const app = express();

//3- Declaramos el puerto
const PORT = 3000;

//4- Utilizamos el método get para asociar peticion con devolucion de llamadas
app.get("/miRuta", function(req,res){
    res.send("Hola mundo soy una respuesta a la peticion /miRuta");
});

// Inicializamos el servidor
app.listen(PORT,function(){
    console.log(`servidor ejecutando en puerto:  ${PORT}`);
});

