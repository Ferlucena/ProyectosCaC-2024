// Declaración de la función async que contiene el fetch
async function get_data() {
  //Manejo de las promesas mediante try-caatch
  try {
    // Declaración de la variable que contiene solicitud GET mediante fetch
    const response = await fetch("https://rickandmortyapi.com/api/character");
    // Parseo de la respuesta en formato JSON y devolución como resultado
    const data = await response.json();

    // Desestructuramos el objeto data, no es obligatorio
    const { info, result } = data;

    //Zona de llamada a las funciones que renderizan
    renderizarTarjetas(data.results);
    //Agregamos un evento click
    agregarEvento();
    
  } catch (error) {
    console.log("Error en la solicitud: " + error);
  }
}


// Función para renderizar tarjetas en el DOM
function renderizarTarjetas(datos) {
  //1- Declaración de la variable que contiene el elemento del DOM
  const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

  //2- Limpieza de contenidos antes de agregar tarjetas
  contenedorTarjetas.innerHTML = "";

  //3- Iteramos sobre los contenidos recibidos en el fetch y los agregamos al contenedor a medida que la iteración se sucede
  datos.forEach(dato => {
    //3.1- Por cada dato iterado crearemos el elemento que contendrá la tarjeta
    const   article = document.createElement("article");
    //3.2- Agregamos una clase a nuestra tarjeta 
    article.classList.add("tarjeta");
    //3.3- Agregamos el contenido dinámico a la tarjeta
    article.innerHTML = `
    <img src="${dato.image}" alt="Imagen del personaje ${dato.name}" class="card_img-size">
    <label>Nombre:</label>
      <p>${dato.name} </p>
      <div>
      <label>Estado:</label>
      <p ><i class="fa-solid fa-circle ${dato.status.toLowerCase()}"></i>
${dato.status} </p>
<label>Planeta:</label>
      <p>${dato.location.name} </p>
      </div>
      <a href "#" class="detalles" data-id="${dato.id}">Ver personaje</a>
    `;
    //3.4- Agregamos la tarjeta al contenedor
    contenedorTarjetas.appendChild(article);
  });
}

//Funcion para agregar un evento
function agregarEvento(){
  // Obtenemos todos los enlaces con la clase "detalles"
  const enlacesVerDetalles = document.querySelectorAll(".detalles");
  
  /** INGRESO A CADA TARJETA **/
  // Agregamos un evento de clic a cada enlace
  enlacesVerDetalles.forEach(enlace => {
    enlace.addEventListener("click", async (event) => {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      //obtenemos el id del personaje desde el enlace;
      const idPersonaje = event.target.getAttribute("data-id");
      

      // Realizamos la solicitud a la API de Rick and Morty, debe hacerse dentro de un bloque try-catch
      try {
        //1- Realizamos la solicitud a la API de Rick and Morty
        const response = await fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
        //2- Parseo a objeto JSON
        const data = await response.json();

        //3- Declaración de la variable que contiene el elemento del DOM
        const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
        
        //4- Declaración de la variable que contiene el elemento del DOM
        const article = document.createElement("article");
        //5- Agregamos una clase a nuestra tarjeta 
        article.classList.add("tarjeta");
        

        //6- Limpieza de contenidos antes de agregar tarjetas
        contenedorTarjetas.innerHTML = "";

        //6.1- Agregamos un enlace de regreso al index
        contenedorTarjetas.innerHTML=`<a href="./index.html">Volver</a>`;
        
        //7- Iteramos sobre los contenidos recibidos en el fetch 
        article.innerHTML = `          
          <img src="${data.image}" alt="Imagen del personaje">
          <h2>${data.name}</h2>
          <p><i class="fa-solid fa-circle ${data.status.toLowerCase()}"></i>Estado: ${data.status}</p>
          <p>Especie: ${data.species}</p>
          <p>Origen: ${data.origin.name}</p>
        `;

        //8- Inyecto la tarjeta en el contenedor
        contenedorTarjetas.appendChild(article);
        console.log("Detalles del personaje cargados exitosamente");

      } catch (error) {
        console.log("Error en la solicitud del personaje: " + error);
      }
    })
  });
}

// Llamada a la función
get_data();