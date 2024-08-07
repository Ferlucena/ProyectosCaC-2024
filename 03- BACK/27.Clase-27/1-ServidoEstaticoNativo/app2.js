/**
 * Creamos un server estatico que pasa un archivo html
 */

// Importar el módulo http de Node.js para crear el servidor HTTP
const http = require('http');
// Importar el módulo fs de Node.js para trabajar con el sistema de archivos
const fs = require('fs');
// Declaramos el puerto a utilizar
const PORT = 3000;


// Crear un servidor HTTP utilizando el método createServer del módulo http
// Su sintaxis tiene la forma 
// const server = http.createServer(serverOptions, requestListener);

//2.1.1- opciones del servidor, por ejemplo configurando el tiempo de espera
const serverOptions = {
  //tiempo de espera en milisegundos
  timeout: 30000
}

const requestListener = function(req, res) {
    // Determinar la ruta solicitada
    const url = req.url; //.url es un metodo que devuelve la url requerida, este es uno de los casos puntuales donde utilizamos el parametro request

    switch (url) {
      case '/', '/index', 'index.html':
          // Si la ruta solicitada es '/', enviar el contenido del archivo index.html
          const file = fs.readFileSync(__dirname + '/index.html');
          res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
          res.end(file);
          break;
      case '/otra-ruta':
          // Si la ruta solicitada es '/otra-ruta', enviar un mensaje de respuesta
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('¡Bienvenido a la otra ruta!');
          break;
      default:
          // Si la ruta solicitada no coincide con ninguna de las rutas definidas, responder con un error 404
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.end('Error 404: Página no encontrada');
          break;
  }
  
};

// Declaramos e inicializamos la creación del servidor
const server = http.createServer(serverOptions, requestListener);

// Escuchar en el puerto 3000 y mostrar un mensaje cuando el servidor 
// esté listo para recibir solicitudes
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

//En el navegador consultar http://localhost:3000