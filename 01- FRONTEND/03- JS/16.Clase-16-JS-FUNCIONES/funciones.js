/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script sirve a index.html y genera funciones 
 * para calculos aritméticos
 */

//1- Declaracion de las funciones
//1.1- Funcion saludo, imprime por salida un saludo, ejecuta una acción pero no retorna valor
function saludar(nombre){
    alert(`Hola ${nombre}!`);
}

// Expresion en flecha
const saludar = (nombre)=>{alert(`Hola ${nombre}!`)};

// Llamada a las funcion saludar
saludar('Pepe');


//1.2- Función paramétrica sumar, retorna un valor de suma, pero no imprime por salida
function sumar(num1, num2) {
    //1- Variables locales
    let resultado = num1 + num2;
    //2- Valor de retorno
    return resultado;
}

// Llamada a las funcion sumar
console.log('llamando a sumar');
sumar(2, 3);
console.log(`fin de la llamada a sumar`);
// Para reflejar el valor por salida
document.write(`<p>La suma es: ${sumar(2,3)}</p>`);

// Expresion flecha de sumar, se la asocia a la nomenclatura "función expresada" dentro de una variable var
var sumar = (num1, num2) => num1+num2; //sin espacios en blanco POR FAVOR!

// Función no paramétrica, se piden los valores en la misma función
function sumar() {
    //1- Variables locales
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado = num1 + num2;
    //2- Valor de retorno
    alert(`La suma es: ${resultado}`);
} 

//1.3- Función restar, retorna un valor de resta, pero no imprime por salida
function restar(num1, num2) {
    //1- Variables locales
    let resultado = num1 - num2;
    //2- Valor del retorno
    return resultado;
} 

// Llamada a la funcion restar
document.write(`<p>La resta es: ${restar(10,6)}</p>`);

//Expresion flecha de restar
const restar = (num1, num2) => num1-num2;

// Función no paramétrica, se piden los valores en la misma función
function restar() {
    //1- Variables locales
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado = num1 - num2;
    //2- Valor de retorno
    alert(`La resta es: ${resultado}`);
} 

function dividir(num1, num2) {
    //1- Variables locales
    let resultado = num1 / num2;
    //2- Valor del retorno
    return resultado;
} 

//Expresion flecha de restar
const dividir = (num1, num2) => num1/num2;

// Función no paramétrica, se piden los valores en la misma función
function dividir() {
    //1- Variables locales
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado = num1 / num2;
    //2- Valor de retorno
    return resultado;
} 

function multiplicar(num1, num2) {
    //1- Variables locales
    let resultado = num1 * num2;
    //2- Valor del retorno
    return resultado;    
} 

//Expresion flecha de restar
const multiplicar = (num1, num2) => num1/num2;

// Función no paramétrica, se piden los valores en la misma función
function multiplicar() {
    //1- Variables locales
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado = num1 * num2;
    //2- Valor de retorno
    return resultado;
} 




