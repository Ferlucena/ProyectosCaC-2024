/**
 * Desde ese archivo llamamos al JSON
 * Lo transformamos a un objeto literal mediante un parseo
 * Obtenemos los datos del objeto recorriendolo mediante un for-each
 * el for-each añade un comportamiento al objeto mediante una funcion flecha
 */

//Declaramos una variable donde capturamos el archivo json
fetch('simpsons.json')
  .then(response => response.json())
  .then(data => {
    document.write(`<head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width">
    <title>Funciones</title><link href="style.css" rel="stylesheet" type="text/css" />
    </head>`);
    Object.values(data).forEach(personaje => {
      document.write(obtenerFoto(personaje));
      document.write(obtenerNombre(personaje));
      document.write(obtenerEdad(personaje));
      document.write(obtenerFraseFavorita(personaje, "¡Mmm... donuts!"));
    });
  })
  .catch(error => {
    console.error('Error al leer el archivo JSON:', error);
  });