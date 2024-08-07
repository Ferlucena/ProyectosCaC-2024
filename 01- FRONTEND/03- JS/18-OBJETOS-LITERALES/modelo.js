/**
 * Escribimos el modelo mediante objeto literal
 */

// Construimos el mismo objeto Simpsons pero ahora con notacion de objetos literales

const Simpsons = {
  //Atributos de clase  
  //Es comun en objetos literales, pero no obligatorio inicializar los valores
  //No se inicializan como variables let o var lo que indica que son propiedades del objeto
    
  nombre: "",
  edad: 0,
  peso: 0,
  esCalvo: false,

  // Método para obtener la foto (funciones dentro de una variable, como lo visto en flecha)
  //this. indica que el método será propiedad del objeto nuevo, que se creará en el otro archivo
  // Estos métodos se llaman anónimos
  obtenerFoto() {
    document.write(`<div class="container">`);
    document.write(`<img src="./assets/${this.nombre.toLowerCase()}.png" alt="${this.nombre}" >`);
  },

  // Método para obtener el nombre
  obtenerNombre() {
    document.write(`<p>Nombre: ${this.nombre}</p>`);
  },

  // Método para obtener la edad
  obtenerEdad() {
    document.write(`<p>Edad: ${this.edad} años</p>`);
  },

  // Método para obtener la frase favorita
  obtenerFraseFavorita(fraseFavorita) {
    document.write(`<p>Frase favorita de ${this.nombre}: ${fraseFavorita}</p>`);
    document.write('</div>');
  }
}