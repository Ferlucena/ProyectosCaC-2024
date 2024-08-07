// Definir las opciones del menú
let opcion = prompt("Elija una opción:\n1. Opción 1\n2. Opción 2\n3. Opción 3");

// Convertir la entrada a un número entero
opcion = parseInt(opcion);

// Verificar la opción elegida y ejecutar la acción correspondiente
if (opcion === 1) {
    console.log("Ha elegido la opción 1.");
    // Aquí colocas el código para la opción 1
} else if (opcion === 2) {
    console.log("Ha elegido la opción 2.");
    // Aquí colocas el código para la opción 2
} else if (opcion === 3) {
    console.log("Ha elegido la opción 3.");
    // Aquí colocas el código para la opción 3
} else {
    console.log("Opción inválida. Por favor, elija una opción válida.");
}