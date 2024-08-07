/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script instancias.js y genera a los personajes particulares 
 * en el archivo instancias.js
 * En este archivo estaremos dando las caracteristicas especificas de cada personaje
 */

// Crear una instancia de Homero
const homero = Object.create(Simpsons);

// Asignar los valores específicos de Homero
homero.nombre = "Homero";
homero.edad = 39;
homero.peso = 108;
homero.esCalvo = true;

