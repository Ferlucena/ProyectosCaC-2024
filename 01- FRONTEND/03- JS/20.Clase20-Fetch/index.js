//Esta función realiza una solicitud a la API 
//de Rick and Morty para obtener datos de personajes.
function get_data() { 
    // Utiliza fetch() para realizar la solicitud HTTP a la URL especificada
    fetch("https://rickandmortyapi.com/api/character")
    /*
    Maneja la respuesta utilizando el método .then().
    Verifica si la respuesta es exitosa (response.ok). Si no lo es, arroja un error.
    Convierte la respuesta a formato JSON utilizando response.json().
    */
      .then(response => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.statusText);
        }
        return response.json();
      })

      /**
       * Una vez que se resuelve la promesa y se obtienen los datos, 
       * llama a la función renderizarTarjetas() para mostrar los datos en el DOM.
       * También llama a la función agregarEvento() 
       * para agregar eventos a los enlaces de detalles de los personajes.
       */

      .then(data => {
        const { results } = data;
        renderizarTarjetas(results);
        agregarEvento();
      })
      .catch(error => {
        console.log("Error en la solicitud: " + error);
      });
  }
  
    /**
     * Función renderizarTarjetas(datos)
     * Esta función toma los datos de los personajes obtenidos de la API 
     * y los muestra en el DOM.
     * Utiliza document.getElementById() para obtener el contenedor de tarjetas 
     * en el DOM.
     * Limpia el contenido del contenedor utilizando .innerHTML = "".
     * Itera sobre los datos de los personajes utilizando forEach().
     * Para cada personaje, crea un nuevo elemento <article> 
     * y le agrega la clase "tarjeta".
     * Llena el contenido del artículo con información del personaje,
     * como su nombre, estado, planeta, etc.
     * Agrega el artículo al contenedor de tarjetas utilizando .appendChild().
     */

  function renderizarTarjetas(datos) {
    const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
    
    //
    datos.forEach(dato => {
      const article = document.createElement("article");
      article.classList.add("tarjeta");
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
        <a href="#" class="detalles" data-id="${dato.id}">Ver personaje</a>
      `;
      contenedorTarjetas.appendChild(article);
    });
  }
  
  /**
   * Función agregarEvento()
   * Esta función agrega un evento de clic a cada enlace de detalles de los personajes.
   * Utiliza document.querySelectorAll() para seleccionar todos los enlaces 
   * con la clase "detalles".
   * Itera sobre los enlaces utilizando forEach().
   * Agrega un evento de clic a cada enlace.
   * Cuando se hace clic en un enlace, utiliza event.preventDefault() 
   * para evitar el comportamiento predeterminado del enlace. 
   * Obtiene el ID del personaje del atributo data-id del enlace.
   * Realiza una nueva solicitud a la API para obtener detalles del personaje 
   * según su ID.
   * Muestra los detalles del personaje en el DOM.
   * Maneja errores utilizando .catch().
   */
  
  function agregarEvento() {
    const enlacesVerDetalles = document.querySelectorAll(".detalles");
    enlacesVerDetalles.forEach(enlace => {
      enlace.addEventListener("click", event => {
        event.preventDefault();
        const idPersonaje = event.target.getAttribute("data-id");
        fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
          .then(response => {
            if (!response.ok) {
              throw new Error("Error en la solicitud del personaje: " + response.statusText);
            }
            return response.json();
          })
          .then(data => {
            const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
            const article = document.createElement("article");
            article.classList.add("tarjeta");
            contenedorTarjetas.innerHTML = "";
            contenedorTarjetas.innerHTML = `<a href="./index.html">Volver</a>`;
            article.innerHTML = `
              <img src="${data.image}" alt="Imagen del personaje">
              <h2>${data.name}</h2>
              <p><i class="fa-solid fa-circle ${data.status.toLowerCase()}"></i>Estado: ${data.status}</p>
              <p>Especie: ${data.species}</p>
              <p>Origen: ${data.origin.name}</p>
            `;
            contenedorTarjetas.appendChild(article);
            console.log("Detalles del personaje cargados exitosamente");
          })
          .catch(error => {
            console.log("Error en la solicitud del personaje: " + error);
          });
      });
    });
  }
  
  get_data();
  