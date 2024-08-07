/**
 * Router: Un router en Express es una manera de agrupar rutas relacionadas. 
 * Es como un mini-servidor dentro del servidor principal. 
 * Ayuda a organizar el código cuando tienes muchas rutas.
 */

/**
 * Objetivo: crear un servidor que responda a consultas de peliculas
 * 1- Creamos la estructura del proyecto con un enrutador.
 * 2- Creamos los archivos 'server.js', '/routes/movieRoutes.js', '/public/movies.json'
 * 3- npm init -y. Configuramos el script con --watch
 * 4- npm intall express --save
 * 5- Codificamos en orden:
 * 5.1- Codificamos el server
 * 5.2- Codificamos el router  
 */

//1- Importamos los módulos necesarios en formato common
const express = require('express');

//2- Instanciamos express
const app = express();

//3- Declaramos un puerto
const PORT = 3000;

//4- Llamamos al módulo propio (realizaremos a futuro)
const moviesRouter = require('./routes/moviesRouter');

//5- Uso del middleware express.json
// Este middleware nos permite analizar los cuerpos 
// de las solicitudes entrantes con formato JSON 
// se encarga de convertir el cuerpo de la solicitud 
// en un objeto JavaScript accesible a través de req.body.
app.use(express.json());

// 6- Definimos el prefijo principal de la ruta
// Toda consulta a peliculas lo haremos desde /movies/sub_ruta
// las sub_rutas son manejadas por el módulo moviesRouter
app.use('/movies', moviesRouter);

//7- Iniciamos el servidor 
app.listen(PORT,()=>{console.log(`Servidor escuchando en puerto: ${PORT}`)});

//8- Pasamos a configurar el archivo "/routes/moviesRouter.js"
