/**
 * Autor
 * version
 * fercha
 * El siguiente script genera control de flujos
 */

// Inicialización de las variables
// Pedimos al usuario que ingrese su nombre de usuario
let usr = prompt("Por favor, ingrese su nombre de usuario o email:");

// Pedimos al usuario que ingrese su contraseña
let clave = prompt("Por favor, ingrese su contraseña:");

// Verificamos si el usuario y la contraseña son correctos
if ((usr === "codo" || usr === "codo@codo.com") && clave === "24123") {
    // Si son correctos, mostramos un mensaje de ingreso exitoso
    document.write("Ingreso exitoso. ¡Bienvenido, " + usuario + "!");
} else {
    // Si no son correctos, mostramos un mensaje de error
    alert("Usuario o clave incorrectos. Por favor, inténtelo de nuevo.");
} 
