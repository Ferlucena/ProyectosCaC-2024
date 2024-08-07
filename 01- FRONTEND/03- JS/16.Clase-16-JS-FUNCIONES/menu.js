/**
 * autor/a:
 * version:
 * fecha: 
 * El siguiente script sirve a index.html y genera una
 * función que llama a un menú
 * El menú consta de un switch que por recursividad 
 * vuelve a llamarse a si misma
 */

//1- Declaración de las variables
function menu(){
    //Inicializacion de variables por instruccion de entrada
    let opc = prompt("Seleccione una opción:\n1. Sumar\n2. Restar\n3. Salir");
    
    // Proceso mediante estructura de switch
    switch (opc) {
        case "1":            
          sumar();
          menu()
          break;
        case "2":
          restar();
          menu()
          break;
        case "3":
          document.write("¡Hasta luego!");
          exit(0);
          break;
        default:
          alert("Opción no válida. Por favor, seleccione una opción válida\n(1 - 2 - 3)");
          menu(); // Llamada recursiva para mostrar el menú nuevamente
          break;
      }
}

