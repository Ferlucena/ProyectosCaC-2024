/**
 * Router: Un router en Express es una manera de agrupar rutas relacionadas.
 * Es como un mini-servidor dentro del servidor principal.
 * Ayuda a organizar el código cuando tienes muchas rutas.
 * Cuando accedes a '/movies/sub_ruta' en tu navegador
 * o herramienta como Postman, la aplicación:
 * Primero busca la ruta '/movies' en el archivo principal (server.js).
 * Luego delega el manejo de esa ruta al router moviesRouter.
 * Finalmente, dentro de moviesRouter, encuentra la subruta '/list'
 * y ejecuta la función correspondiente que devuelve "sub_ruta".
 */

// 1- Importamos el módulo
const express = require("express");

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el módulo de lectura fs
const fs = require("fs");

// 4- Importamos el módulo path que nos ayuda a normalizar la ruta del archivo
const path = require("path");

// 5- Con path.join leemos/escribimos directamente en un archivo movie.json
const moviesPath = path.join(__dirname, "../public/movies.json");

// 6- Leemos y formateamos el contenido JSON
const archivoJSON = fs.readFileSync(moviesPath, "utf-8");

// 7- Convertimos el archivo JSON a un array legible por JS
const movies = JSON.parse(archivoJSON);

// 7- Definición de rutas de solicitudes GET
// 7.1- Probamos una ruta genérica
// cuando se realice una consulta GET a la ruta '/movies/'

// forma general de la expresión router.get(' ',(req, res)=>{});
router.get("/saludo", (req, res) => {
  // Enviamos una respuesta en formato JSON
  res.json({ mensaje: "Hola desde la ruta de películas!" });
});

// Objeto req (request): Contiene toda la información sobre la solicitud HTTP realizada por el cliente.
// Incluye datos como los parámetros de ruta, las cabeceras de la solicitud, el cuerpo de la solicitud, etc.
// Ejemplo: req.params, req.query, req.body, etc.

// Objeto res (response):
// Se utiliza para enviar una respuesta al cliente.
// Proporciona métodos como res.send(), res.json(), res.status(), etc., para construir y enviar la respuesta.
// Ejemplo: res.send('Hello World'), res.json({ message: 'Hello World' }).

// Obtenemos todas las películas
router.get("/", (req, res) => {
  res.json(movies);
});

// Rutas paramétricas, con id 
// req--> request
// res--> response
// La principal ventaja de las rutas paramétricas es que permiten crear rutas dinámicas 
// sin necesidad de definir explícitamente cada posible URL. 
// Los valores de los parámetros son capturados y utilizados dentro del código 
// para generar contenido dinámico o realizar acciones específicas.
// :id es un parámetro que toma diferentes valores

router.get("/:id", (req, res) => {
  // Realizamos la búsqueda dentro del array mediante .find()
  // .find() acepta como parámetro una función
  const movie = movies.find(movie => movie.id === parseInt(req.params.id));

  // Si no se encuentra la película
  if (!movie) {
    // Variable estado 404
    const estado404 = res.status(404);
    // Valor de retorno
    return estado404.send("Película no encontrada");
  }

  // Enviamos la película encontrada
  res.json(movie);
});

//9- Solicitudes del tipo POST
// Una solicitud del tipo POST se utiliza para crear un nuevo recurso en el servidor. 
// En este caso recibimos una solicitud dentro de req
router.post("/", (req, res) => {
  /* Verificar que el cuerpo de la solicitud contiene los datos necesarios
  const { title, director, year, image } = req.body;
  if (!title || !director || !year || !image) {
    return res.status(400).json({ mensaje: "Faltan datos en la solicitud" });
  }*/

  // Creamos la nueva película con los datos del cuerpo de la solicitud
  const nuevaPeli = {
    id: movies.length + 1,
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
    image: req.body.image,
  };

  // Añadimos la nueva película al array de películas
  movies.push(nuevaPeli);

  // Convertimos el array actualizado de películas a formato JSON
  const moviesUpdatedJSON = JSON.stringify(movies, null, 2);
  //stringify(objeto, funcion, sangría)

  // Guardamos el array actualizado en el archivo movies.json
  fs.writeFileSync(moviesPath, moviesUpdatedJSON, "utf-8");

  // Enviamos una respuesta de éxito al cliente
  res.status(201).json({
    mensaje: "Película agregada con éxito",
    película: nuevaPeli,
  });
});

//9- Solicitudes del tipo PUT
// El método PUT se utiliza para reemplazar completamente un recurso existente,
// a diferencia de PATCH que realiza modificaciones parciales.
// Copiamos el metodo GET

router.put("/:id", (req, res) => {
  // Realizamos la búsqueda dentro del array mediante .find()
  // .find() acepta como parámetro una función
  const movie = movies.find(movie => movie.id === parseInt(req.params.id));

  // Si no se encuentra la película
  if (!movie) {
    // Variable estado 404
    const estado404 = res.status(404);
    // Valor de retorno
    return estado404.send("Película no encontrada");
  }

  // Actualizamos los valores de la película con los valores
  // proporcionados en el cuerpo de la solicitud (req.body),
  // Con esta expresión solo se actualicen los atributos de la película
  // si se proporcionan en el cuerpo de la solicitud.
  // Si no se proporcionan, se conservan los valores actuales.

  movie.title = req.body.title || movie.title;
  movie.director = req.body.director || movie.director;
  movie.year = req.body.year || movie.year;
  movie.image = req.body.image || movie.image;

  // Convertimos el array actualizado de películas a formato JSON
  const moviesUpdatedJSON = JSON.stringify(movies, null, 2);

  // Guardamos el array actualizado en el archivo movies.json
  fs.writeFileSync(moviesPath, moviesUpdatedJSON, "utf-8");

  // Enviamos la película encontrada
  res.json(movie);
});

//10- Solicitud del tipo DELETE
router.delete("/:id", (req, res) => {
  // Realizamos la búsqueda dentro del array mediante .find()
  // .find() acepta como parámetro una función
  const movieIndex = movies.findIndex(
    (movie) => movie.id === parseInt(req.params.id)
  );

  // Si no se encuentra la película
  if (movieIndex === -1) {
    // Variable estado 404
    const estado404 = res.status(404);
    // Valor de retorno
    return estado404.send("Película no encontrada");
  }

  // Accion de borrado
  const deletedMovie = movies.splice(movieIndex, 1);

  // Convertimos el array actualizado de películas a formato JSON
  const moviesUpdatedJSON = JSON.stringify(movies, null, 2);

  // Guardamos el array actualizado en el archivo movies.json
  fs.writeFileSync(moviesPath, moviesUpdatedJSON, "utf-8");

  //Respondemos con un mensaje de éxito e info sobre la peli borrada
  res.json({
    mensaje: "Película borrada con éxito",
    película: deletedMovie,
  });
});

// Exportamos el módulo router para que pueda ser utilizado en otros archivos
module.exports = router;
