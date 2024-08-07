/**
 * Autor
 * version
 * fercha
 * El siguiente script genera control de flujos
 */

// Inicialización de las variables
// Pedimos al usuario que ingrese su nombre de usuario
let usuario = prompt("Por favor, ingrese su nombre de usuario:");

// Pedimos al usuario que ingrese su contraseña
let clave = prompt("Por favor, ingrese su contraseña:");

// Verificamos si el usuario y la contraseña son correctos
if (usuario === "codo" && clave === "24123") {
    // Si son correctos, mostramos un mensaje de ingreso exitoso
    document.write("Ingreso exitoso. ¡Bienvenido, " + usuario + "!");
} else{
    // Ingresar nuevamente los datos
    alert("Usuario o clave incorrectos. Por favor, inténtelo de nuevo.");
    usuario = prompt("Por favor, ingrese su nombre de usuario:");
    clave = prompt("Por favor, ingrese su contraseña:");

    if (usuario === "usuarioEjemplo" && clave === "contraseñaEjemplo") {
        // Si son correctos, mostramos un mensaje de ingreso exitoso
        document.write("Ingreso exitoso. ¡Bienvenido, " + usuario + "!");
    } else{
        // Ingresar nuevamente los datos
        alert("Usuario o clave incorrectos. Intentos agotados, intente mas tarde.");}

} 