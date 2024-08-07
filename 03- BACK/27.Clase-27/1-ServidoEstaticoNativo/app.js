/*
Vamos a crear un servidor estático Nativo
Es decir un software que a futuro funcionará desde el hardware 
del servidor y contestará
a las peticiones que realiza el cliente
*/

// 1- Creación del servidor estático
// 1.1- Crearemos una función (función expresada) se llama server, 
// esta función se activa ante una petición
// Su sintaxis tiene la forma
// const server = http.createServer(serverOptions, requestListener);

/*************************************************************************** 
 * Kit de la cuestion es completar debidamente la expresion
 * const server = http.createServer(OpcionesDelServidor, RespuestaPeticiones);
****************************************************************************/


// Importamos el modulo nativo http 
const http = require('http');

// Importamos modulo nativo fs
const fs = require('fs');

// Declaracion del puerto
const PORT = 3001;

//1- Opciones del servidor
const serverOptions = {
    //Atributos del objeto
    timeout: 3000,
    maxConnections: 100
};

//2- Función que maneja las solicitudes
const requestListener = function(req, res) {
    //Utilizamos el módulo fs para leer el archivo index.html
    const archivo = fs.readFileSync(__dirname + '/index.html');
    // Objeto cabecera
    const cabecera = {'Content-Type': 'text/html; charset=UTF-8'};

    // Configuramos el estado de la respuesta en estado 200 (ok)
    // respuesta contiene codigo o estado, cabecera y cuerpo
    res.writeHead(200, cabecera);

    // Enviamos el documento, esto es el cuerpo
    res.end(archivo);
};

// Declaramos la funcion del servidor
const server = http.createServer(serverOptions, requestListener);

// Llamamos al server y lo dejamos escuchando
server.listen(PORT, function(){console.log(`servidor escuchando en localhost:${PORT}`);})

