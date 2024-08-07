/**
 * Autor/a
 * version
 * fercha
 * El siguiente script genera control de flujos mediante switch
 */

// Declaración de las variables
let opc;

// Variables de control
repite = false;

// Pedimos al usuario que ingrese su nombre de usuario

do {
 opc = prompt("Bienvenido/a\nIngrese 1 si desea un saludo\nIngrese 2 si desea una despedida");

// Proceso
switch (opc) {
  case "1":
    document.write("<h1>¡Hola!, que tengas un lindo día...</h1>");
    //Actualización de la variable de control del do-while
    repite = false;
    break;

  case "2":
    document.write("<h1>¡Hasta la próxima!</h1>");
    //Actualización de la variable de control del do-while
    repite = false;
    break;

  default:
    alert("Introduzca una opcion correcta")
    //Actualización de la variable de control del do-while
    repite = true;
    break;
}

} while (repite);

