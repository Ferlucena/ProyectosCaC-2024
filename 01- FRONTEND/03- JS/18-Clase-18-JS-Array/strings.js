/* Entendiendo los Strings
* Trabajamos con los distinos métodos asociados a String
*/

// Declaración e inicialización de variables
let texto1 = "Mi texto";
let texto2 = "mi texto";
let texto3 = "   mi texto con espacios     ";

// Operaciones con Strings
// * Hallamos la longitud de la cadena como si fuese un array
console.log("La longitud de texto1 es " + texto1.length);
// * Imprimo la letra del índice 1
console.log(texto1.charAt(1));
// Comparamos detalladamente los strings --> si no encuentra coincidencia devuelve un número negativo
console.log(texto1.localeCompare(texto2));
// Concatenamos strings
console.log(texto1.concat(texto2));
// Buscamos coincidencias --> devuelve booleano
console.log(texto1.includes("texto"));
// * Comparo con verdadero o falso --> devuelve booleano
console.log(texto1 === texto1);
// * Volver a mayúsculas, esto es ideal para los ingresos de datos. --> devuelve mayúsculas
console.log(texto1.toUpperCase());
// * Volver a minúsculas --> devuelve minúsculas
console.log(texto1.toLowerCase());
// Recortar cadena --> devuelve el texto sin espacios de inicio o fin
console.log(texto3.trim());

//Objetos literales
let personal1 = {
    //atributos
    nombre: "Luis",
    apellido: "Fernandez"
}

//pasamos a json
let jsonPersonal1 = `{
    "personal1": {
        "nombre": "Luis",
        "apellido": "Fernández",
}
}`;

// Parsear el JSON
var json = JSON.parse(jsonPersonal1);
console.log(json.personal1);

// Acceder al nombre completo del segundo objeto
var nombreCompleto = json.personal2.nombre + " " + json.personal2.apellido;
console.log("Nombre completo: " + nombreCompleto);