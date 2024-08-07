/**
 * Autor/a
 * version
 * fercha
 * El siguiente script sirve a index3.html y optimiza 
 * la accion repetitiva del bucle while reemplazandolo por un bucle for
 * El programa calcula promedio de notas
 */

//Declaración de las variables
let cant, nota, suma, promedio;

// Sobre las variables
// cant, nota se inicializan por instrucción de entrada
// suma, es una variable acumuladora gestiona su propio valor sumando valores e inicia en 0
// promedio se inicializará a partir de una fórmula que plantearemos

//Inicializamos las variables que necesiten ser inicializadas
suma = 0;

//Inicializacion de la cantidad de datos a cargar
cant = parseInt(prompt("Ingrese la cantidad de notas a cargar"));

//Proceso mediante bucle for
for (let i = 0; i<cant; i++) {
    nota = parseFloat(prompt("Ingrese un valor:"));

    document.write("<p>Se introdujo la nota: "+nota+"</p>");

    //Acumulamos el valor en la variable acumuladora
    suma = suma+nota;    
}

// Resultado del promedio
promedio = suma/cant;
document.write(`<p style="font-weight:bold">El promedio final es: ${promedio}</p>`);
document.write(`<p style="color:green; font-weight:bold">El programa ha finalizado</p>`);