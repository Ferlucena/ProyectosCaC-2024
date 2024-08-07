/**
 * En este caso las funciones callback son funciones 
 * que llaman a otras funciones pero desde su parámetro
 * 
 */

//Funciones callback
//1- Declarar una funcion
function saludar(nombre) {
  alert("Hola " + nombre);
}

//2- Declarar otra función y predisponerla a recibir otra funcion como parámetro
function saludoPersonalizado(otraFuncion) {
  //Declaracion de variables locales
  let nombre = prompt("Por favor ingresa tu nombre.");
  //Llamada a la callback
  otraFuncion(nombre);
}

//3- Llamada a la función que recibe a otra
saludoPersonalizado(saludar);