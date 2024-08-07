/**
 * Crearemos un servidor con el módulo express
 * 1- archivo server.js
 * 2- creamos la estructura del proyecto carpeta public
 * 3- nmp init -y
 * 4- npm install express --save
 * 5- Avanzamos con el código del servidor
 **/

//1- Importamos el modulo express
const express = require("express");

//2- Creamos una instancia de express
const app = express();

//3- Creamos el puerto
const PORT = 3000;

//4- Configuramos la carpeta public para servir archivos estáticos
app.use(express.static('public'));

//5- Agregamos alguna rutas o endpoint
app.get("/despedida", function(req,res){
    res.sendFile(__dirname+"/public/despedida.html");
});
app.get("/cuento", function(req,res){
    res.sendFile(__dirname+"/public/cuento.html");
});

//6- Activamos el server
app.listen(PORT, ()=>{
    console.log(`Servidor Express escuchando en puerto: ${PORT}`);
});