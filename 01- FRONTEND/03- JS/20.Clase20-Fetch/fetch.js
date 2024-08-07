// Simulacion de asincronismo
//setTimeout(funcion, tiempo)
console.log("Esto se muestra primero");
setTimeout(function(){console.log("Esto se muestra por ultimo")},5000);
console.log("Esto se muestra segundo");

// Definición de Opciones para la Solicitud
// Este objeto contiene las configuraciones para nuestra 
// solicitud HTTP.
// method: 'GET' Especifica el método HTTP que vamos a usar. 

//Declaración del objeto que configura la solicitud HTTP

const options = {
    //'GET', se usa para solicitar datos del servidor sin 
    // enviar ningún dato adicional en el cuerpo de la solicitud.
    method: 'GET',
    // headers: Este objeto define los encabezados HTTP 
    // para la solicitud. 
    headers: {
        accept: 'application/json'
        //Le indica al servidor que queremos 
        // recibir la respuesta en formato JSON.
    }
};

//La función fetch se utiliza para realizar solicitudes HTTP.
// fetch(url,options)
fetch('https://rickandmortyapi.com/api/character', options)
//Procesando la respuesta
//then se utiliza para manejar esta promesa (respuesta). 
// Cuando la promesa se resuelve, 
// ejecuta la función pasada como argumento.

//.then ("entonces" o "luego").
  .then(function(response){
    //Convierte la respuesta en formato JSON a un objeto JavaScript
    return response.json()
})
//segundo .then maneja la promesa devuelta por response.json
  .then((response) => {
    // Imprime el objeto JSON por consola
    console.log(response)
})
  .catch((error) => {
    // Si ocurre un error, imprime el error en la consola
    console.error(error)
});

// Declaramos una función para pedir datos mediante un fecth

function pedirDato1(){
    fetch('https://rickandmortyapi.com/api/character/1')
      .then(response => response.json())
      .then(personaje => {
          // Imprimir en consola el nombre, imagen y especie del personaje
          console.log(personaje.name, personaje.image, personaje.species);
          document.write(`<img src="${objeto.image}" alt="${objeto.name}">`);
      })
      .catch(err => console.error(err));
};

pedirDato1();

/* function pedirDatos(){
    fetch('https://rickandmortyapi.com/api/character', options)
      .then(response => response.json())


      .then(personajes => {

          personajes.results.forEach((personaje) => {
              // Imprimir en consola el nombre e imagen de cada personaje
              console.log(personaje.name, personaje.image, personaje.species);
            });
            
        })
        .catch(err => console.error(err));
    }
    
pedirDatos(); */

function pedirDatos(){
    fetch('https://rickandmortyapi.com/api/character', options)
      .then(response => response.json())

      .then(personajes => {
        //Obtenemos el contenedor de tarjetas
        const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
        
        //Utilizamos el buccle for-each para agregar template-string a cada elemento
        personajes.results.forEach(dato => {
           // Creamos el elemento html
          const article = document.createElement('article');
           // Agregamos un estilo
          article.classList.add("tarjeta");
           // Agregamos contenido dentro de la etiqueta article con template-string
          
           article.innerHTML = `
            <img src="${dato.image}" alt="Imagen del personaje ${dato.name}" class="card_img-size">
            <label>Nombre:</label>
            <p>${dato.name}</p>
            <div>
              <label>Estado:</label>
              <p><i class="fa-solid fa-circle ${dato.status.toLowerCase()}"></i>${dato.status}</p>
              <label>Planeta:</label>
              <p>${dato.location.name}</p>
            </div>
          `;
          //adjuntamos el contenido de articcle a contenedor de tarjetas
          contenedorTarjetas.appendChild(article);
        }
    )
})
        .catch(err => console.error(err));
    
};
    
pedirDatos();