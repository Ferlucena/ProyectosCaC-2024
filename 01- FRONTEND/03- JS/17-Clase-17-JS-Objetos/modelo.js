/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script modelo sirve a index.html y genera el molde principal
 * luego será adaptado a los personajes particulares en el archivo instancias.js
 * En este archivo estaremos dando las caracteristicas genéricas comunes a 
 * todos los objetos que crearemos en el futuro
 */

// Definimos la función constructora Simpsons

function Simpsons(nombre, edad, peso, esCalvo, fraseFavorita) {
  //Atributos de clase  
  //this. indica que la variable será propiedad del objeto nuevo, que se creará en el otro archivo
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.esCalvo = esCalvo;
  
    // Método para obtener la foto (funciones dentro de una variable, como lo visto en flecha)
    //this. indica que el método será propiedad del objeto nuevo, que se creará en el otro archivo
    // Estos métodos se llaman anónimos
    this.obtenerFoto = function() {
      document.write(`<div class="container">`);  
      document.write(`<img src="./assets/${this.id.toLowerCase()}.png" alt="${this.nombre}" >`);
    };
    
    // Método para obtener el nombre
    this.obtenerNombre = function() {
      document.write(`<p>Nombre: ${this.nombre}</p>`);
    };
  
    // Método para obtener la edad
    this.obtenerEdad = function() {
      document.write(`<p>Edad: ${this.edad} años</p>`);
    };    
    
    // Método para obtener la frase favorita
    this.obtenerFraseFavorita = function() {        
      document.write(`<p>Frase favorita de ${this.nombre}: ${fraseFavorita}</p>`);
      document.write('</div>');
    };
  }
  