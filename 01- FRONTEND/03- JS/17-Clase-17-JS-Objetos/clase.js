/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script genera el molde principal llamado clase
 * luego será adaptado a los personajes particulares en el archivo instancias.js
 * En este archivo estaremos dando las caracteristicas genéricas comunes a 
 * todos los objetos que crearemos en el futuro
 */

class Simpson{

    constructor(nombre, edad, peso, esCalvo, fraseFavorita) {
      this.nombre = nombre;
      this.edad = edad;
      this.peso = peso;
      this.esCalvo = esCalvo;
      this.fraseFavorita = fraseFavorita;
    }
  
    // Método para obtener la foto
    obtenerFoto() {
      document.write(`<div class="container">`);
      document.write(`<img src="./assets/${this.nombre.toLowerCase()}.png" alt="${this.nombre}">`);
    }
  
    // Método para obtener el nombre
    obtenerNombre() {
      document.write(`<p>Nombre: ${this.nombre}</p>`);
    }
  
    // Método para obtener la edad
    obtenerEdad() {
      document.write(`<p>Edad: ${this.edad} años</p>`);
    }
  
    // Método para obtener la frase favorita
    obtenerFraseFavorita() {
      document.write(`<p>Frase favorita de ${this.nombre}: ${this.fraseFavorita}</p>`);
      document.write('</div>');
    }
  }
  
  //Instanciacion
  const homero = new Simpsons("Homero", 40, 90, true, "¡Ouch!");
  const marge = new Simpsons("Marge", 38, 70, false, "¡Mmm...!");
  const bart = new Simpsons("Bart", 10, 40, true, "¡Ay, caramba!");
  const lisa = new Simpsons("Lisa", 8, 35, false, "¡Baaart!");