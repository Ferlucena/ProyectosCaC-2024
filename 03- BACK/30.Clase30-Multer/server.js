/**
 * Objetivo: como manejar la subida de uno o varios archivos en una aplicacion
 * con el middleware "multer"
 * 1- Creamos el módulo o archivo multerConfig.js
 * 2- npm init -y. Configuramos el script con --watch
 * 3- npm intall multer --save
 * 4- npm i express
 * 5- Codificamos el server.js
 * 6- Codificamos el modulo createDir.js
 * 7- Configuramos el modulo multerConfig.js
 * 8- Crear la carpeta /uploads
 * 9- Realizamos pruebas con postman
 */

// Importa los módulos necesarios
const express = require("express");

// Importamos el módulo multer (lo desarrollaremos en el otro archivo)
const upload = require("./multerConfig");

// Importamos el módulo para crear la carpeta 'uploads'
const createDir = require("./createDir");

// Crea una instancia de Express
const app = express();

// Declarar el puerto
const PORT = 3000;

// Verifica y crea la carpeta 'uploads'
createDir();

// Definimos una ruta para la subida de archivos
// Con este middleware definimos la subida de un solo archivo
// upload.single() indica que sube un solo archivo y 'archivo'
// es el nombre del campo del formulario que contiene el archivo a subir
app.post("/upload", upload.single("archivo"), (req, res) => {
  // Si algo sale mal
  if (!req.file) {
    // Si no hay ningún archivo subido, devuelve un error.
    return res.status(400).send("Error al subir el archivo.");
  }

  // Si el archivo se ha subido correctamente, devuelve un mensaje de éxito.
  res.status(200).send("Archivo subido exitosamente.");
});

// Definimos una ruta para la subida de multiples archivos
// upload.array(10) indica que sube 10 archivos en un array y 'archivos'
// es el nombre del campo del formulario que contiene los archivos a subir

app.post("/uploads", upload.array("archivos", 10), (req, res) => {
  //Si algo sale mal
  if (!req.files) {
    // Si no hay ningún archivo subido, devuelve un error.
    return res.status(400).send("Error al subir los archivos.");
  }

  // Si el archivo se ha subido correctamente, devuelve un mensaje de éxito.
  res.status(200).send("Archivos subidos exitosamente.");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
