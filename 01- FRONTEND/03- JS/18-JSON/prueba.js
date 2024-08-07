
// JSON en forma de cadena
var jsonString = `{
    "personal1": {
        "id": "001a",
        "nombre": "Luis",
        "apellido": "Fernández",
        "segundoNombre": null,
        "edad": 30,
        "hijos": [
            "Ana",
            "Luisa",
            "Marcelo"
        ]
    },
    "personal2": {
        "id": "002a",
        "nombre": "Luisa",
        "apellido": "Rodiriguez",
        "segundoNombre": null,
        "edad": 25,
        "hijos": []
    }
}`;

// Parsear el JSON
var json = JSON.parse(jsonString);
console.log(json.personal2);

// Acceder al nombre completo del segundo objeto
var nombreCompleto = json.personal2.nombre + " " + json.personal2.apellido;
console.log("Nombre completo: " + nombreCompleto);