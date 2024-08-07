/**
 * DESAFIO 1
 * Declaramos un array
 * Exploramos los distintos métodos
 * create(crear), read(leer), upload(actualizar), delete(borrar)
 */

// Declaración del arraylist
let autos = ["Tito", "F.Fuego"];

// Métodos
// 1-Insertar
/* autos.push("Volvo");
autos.push("BMW");
autos.push("Ford");
autos.push("Mazda"); */

autos.push("BMW", "Ford", "Mazda");

// 2-Imprimir el arraylist
console.log("El arraylist autos es " + autos);

// 3-Obtengo la longitud del arraylist
let tamanio = autos.length; // este es el método para obtener la longitud
console.log("La longitud es " + tamanio);

// *-Añadimos elementos al arraylist en cualquier momento
autos.push("Torino");
console.log("El nuevo arraylist es " + autos);

// 4- obtener el valor del ultimo elemento
console.log("El último elemento es " + autos.at(-1));

// obtener el valor de un elemento en un indice cualquiera
console.log("El elemento de indice 2 es " + autos.at(2));
console.log("El elemento de indice 2 es " + autos[2]);

// 5- Buscamos el índice de un elemento Mazda y reemplazo por Fitito
console.log("El índice de Mazda es " + autos.indexOf("Mazda"));

// ACTUALIZACION de valores para cambiar un elemento en un arraylist
autos[4] = "Fitito"; // Indicamos el índice y el valor a cargar
console.log("El nuevo arraylist es " + autos);

// 6- Remover elementos en cualquier indice
autos.splice(1, 1); // Indicamos el índice y la cantidad de elementos a borrar
console.log("El nuevo arraylist con el elemento borrado es " + autos);

// Remover el ultimo elemento 
autos.pop(); // Indicamos el índice y la cantidad de elementos a borrar
console.log("El nuevo arraylist con el elemento borrado es " + autos);

// 7- Ordenamos nuestra lista 
autos.sort();
console.log("Nuestra lista ordenada es " + autos);

// 8-  Agregar una marca al principio del array usando unshift
autos.unshift("Tesla");
console.log("Array de autos después de agregar una marca al principio:", autos);

// Eliminar la primera marca del array usando shift
/* let marcaEliminada = autos.shift();
console.log("Array de autos después de eliminar la primera marca:", autos);
console.log("Marca eliminada:", marcaEliminada); */

// 9- Declaración de otro array para combinarlo con anterior
let marcasAdicionales = ["Toyota", "Honda"];

// 10- Generar otro array y unir ambos arrays en uno nuevo usando concat
let marcasCombinadas = autos.concat(marcasAdicionales);
console.log("Array combinado de autos:", marcasCombinadas);

// 11- Utilizar for-in para iterar sobre el array y mostrar los índices
console.log("Iteración usando for-in:");
for (let index in marcasCombinadas) {
    console.log("Índice:", index, "Valor:", marcasCombinadas[index]);
}

// Utilizar for-of para iterar sobre el array y mostrar los valores
console.log("\nIteración usando for-of:");
for (let marca of marcasCombinadas) {
    console.log("Valor:", marca);
}