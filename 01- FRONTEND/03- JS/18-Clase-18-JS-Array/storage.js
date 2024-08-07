/**DESAFIO 5: WEBSTORAGE 
 * 1- Crea una función que guarde los datos en WebStorage
 * 2- Crea una función que cargue los datos de WebStorage
 */

// ¿El navegador soporta esta función?
if (typeof(Storage) !== "undefined") {
   // localStorage es un objeto que guarda clave: valor
   // setItem guarda datos en el dispositivo
    localStorage.setItem("apellido", "Perez")
    localStorage.setItem("nombre", "Juan")
    console.log("Datos guardados.")
 } else {
    console.log("Web Storage no soportado.")
 }
 
 // ¿El navegador soporta esta función?
if (typeof(Storage) !== "undefined") {
    // getItem recupera datos del dispositivo
    let ape = localStorage.getItem("apellido")
    let nom = localStorage.getItem("nombre")
    console.log(ape + ", " + nom)
 } else {
    console.log("Web Storage no soportado.")
 } 

/*  // Eliminar un elemento específico del localStorage
 localStorage.removeItem("apellido");
 console.log("Elemento 'apellido' eliminado.");

 // Limpiar todos los datos almacenados en localStorage
 localStorage.clear();
 console.log("Todos los datos eliminados."); */