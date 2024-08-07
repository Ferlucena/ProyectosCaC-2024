/**
 * MULTER es un middleware de Node.js 
 * para manejar la subida de archivos.
 * En general se usa con express y 
 * facilita la gestión de archivos recibidos 
 * en peticiones HTTP.
 */



// Importa el módulo 'multer', que es un middleware para manejar la subida de archivos en aplicaciones Express.
const multer = require('multer');

// Importa el módulo 'path', que proporciona utilidades para trabajar con rutas de archivos y directorios.
const path = require('path');

// Configura el almacenamiento de archivos con 'diskStorage' de multer.
const storage = multer.diskStorage({
  // 'destination' especifica la carpeta donde se guardarán los archivos subidos.
  // 'req' es el objeto de la solicitud HTTP.
  // 'file' es el archivo que se está subiendo.
  // 'cb' es el callback que se llama después de determinar el destino.
  destination: (req, file, cb) => {
    // El primer argumento de 'cb' es para el error (null si no hay error).
    // El segundo argumento es la carpeta donde se guardará el archivo.
    cb(null, 'uploads/'); 
    // Aquí se define la carpeta 'uploads' como destino para los archivos subidos.
  },
  // 'filename' especifica cómo se nombrarán los archivos subidos.
  // 'req' es el objeto de la solicitud HTTP.
  // 'file' es el archivo que se está subiendo.
  // 'cb' es el callback que se llama después de determinar el nombre del archivo.
  filename: (req, file, cb) => {
    // El primer argumento de 'cb' es para el error (null si no hay error).
    // El segundo argumento es el nombre del archivo.
    // 'Date.now()' se usa para asegurar que cada archivo tenga un nombre único 
    // basado en la marca de tiempo actual.
    // 'path.extname(file.originalname)' obtiene la extensión del archivo original 
    //(por ejemplo, .jpg, .png).
    cb(null, Date.now() + path.extname(file.originalname)); 
    // Genera un nombre único para el archivo usando la fecha y hora actual 
    // y la extensión original.
  }
});

// Crea una instancia de 'multer' con la configuración de almacenamiento definida.
// 'storage' es el almacenamiento configurado que hemos definido previamente.
// Configura la instancia de Multer con opciones adicionales.

const upload = multer({
    // Utiliza la configuración de almacenamiento previamente definida.
    storage: storage,
    // Función para filtrar los archivos según su tipo.
    fileFilter: (req, file, cb) => {
      // Define los tipos de archivos permitidos usando una expresión regular.
      const filetypes = /image\/jpeg|image\/jpg|image\/png|image\/bmp|image\/gif/;;
      // Verifica si el tipo MIME del archivo es uno de los permitidos.
      const mimetype = filetypes.test(file.mimetype);
      // Verifica si la extensión del archivo es una de las permitidas.
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
      // Si ambos, tipo MIME y extensión del archivo, son permitidos, acepta el archivo.
      if (mimetype && extname) {
        return cb(null, true);
      } else {
        // Si el archivo no es permitido, devuelve un error.
        cb('Error: Tipo de archivo no soportado');
      }
    },
    // Define límites para el archivo, como el tamaño máximo en bytes (1MB).
    limits: { fileSize: 1000000 }
  });
  

// Para integrarlo con un trabajo realizado con express
module.exports = upload;

// POR ÚLTIMO CREAR LA CARPETA uploads en la raiz
