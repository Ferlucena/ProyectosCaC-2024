/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script instancias.js y genera a los personajes particulares 
 * en el archivo instancias.js
 * En este archivo estaremos dando las caracteristicas especificas de cada personaje
 */

//Instanciacion de los personajes
const homero = new Simpsons("Homero", 40, 90, true, "¡Ouch!");
const marge = new Simpsons("Marge", 38, 70, false, "¡Mmm...!");
const bart = new Simpsons("Bart", 10, 40, true, "¡Ay, caramba!");
const lisa = new Simpsons("Lisa", 8, 35, false, "¡Baaart!");

console.log(homero.nombre);
console.log(homero.edad);