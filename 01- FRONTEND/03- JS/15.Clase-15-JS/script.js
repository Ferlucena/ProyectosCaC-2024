/**
 * Autor
 * version
 * fercha
 * El siguiente script sirve a index.html y genera control de flujos y repite el codigo con bucle do-while
 */

// Declaración de las variables
let usr;
let clave;


//Variables de control
let repite = false;
let contador = 0; // la variable se llama contador, puede llamarse de cualquier manera

do {
   
  // Pedimos al usr que ingrese su nombre de usr
  usr = prompt("Por favor, ingrese su nombre de usr:");

  // Pedimos al usr que ingrese su contraseña
  clave = prompt("Por favor, ingrese su contraseña:");

  // Verificamos si el usr y la contraseña son correctos

  if ((usr === "codo" || usr === "codo@codo.com") && clave === "123") {
    // Si son correctos, mostramos un mensaje de ingreso exitoso
    document.write("Ingreso exitoso. ¡Bienvenido, " + usr + "!");
    //Actualización de la variable de control
    repite = false;
  } else {
    // Si no son correctos, mostramos un mensaje de error
    alert("usr o clave incorrectos. Por favor, inténtelo de nuevo.");
    //Actualizacion de la variable de control
    repite = true;  
}  

// Actualización del contador
contador++; 
alert("Te quedan "+(3-contador)+" intentos");

} while (repite && (contador<3));
