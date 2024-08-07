/**
 * Autor/a
 * version
 * fecha
 * El siguiente script sirve a index2.html y utiliza una accion repetitiva con bucle while
 */

// Declaración de las variables
let dato;

// variables de control
let registrar;

// Procesos mediante estructura de bucle while
registrar = prompt("¿Desea registrar datos? (s/n)");

while (registrar.toLowerCase() === "s") {
  dato = prompt("Ingrese un dato para cargarlo en el viewport");
  document.write("<p>Usted ingresó:" + dato + "</p>");

  //Actualización de la variable de control
  registrar = prompt("¿Desea ingresar otro dato? (s/n)");
}

document.write(`<p style="color:red">La carga ha finalizado</p>`);
