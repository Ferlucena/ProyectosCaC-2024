/**
 * Como se puede ver, solo se llevan los datos(atributos) de las instancias al JSON, 
 * no los métodos como obtenerFoto(), obtenerNombre(), etc.
 * Esto lo subsanamos con funciones que tomen los datos del JSON y realicen esas acciones.
 */

//Creamos las funciones recreando los métodos de los objetos
function obtenerFoto(personaje) {
    return `<div class="container">
      <img src="./assets/${personaje.nombre.toLowerCase()}.png" alt="${personaje.nombre}" >
    </div>`;
  }
  
  function obtenerNombre(personaje) {
    return `<p>Nombre: ${personaje.nombre}</p>`;
  }
  
  function obtenerEdad(personaje) {
    return `<p>Edad: ${personaje.edad} años</p>`;
  }
  
  function obtenerFraseFavorita(personaje, fraseFavorita) {
    return `<p>Frase favorita de ${personaje.nombre}: ${fraseFavorita}</p>`;
  }