//Es un formato para el intercambio de datos y un subconjunto de los objetos.

//creo un objeto normal
var miObjeto = {
    nombre: "Matt",
    apellido: "Maverick",
    frase: "Simona la cacariza"
}

//convierto ese objeto a tipo json con JSON.stringify(miObjeto)
var miJson = JSON.stringify(miObjeto);

console.log(miJson);

//Las API´s REST usan json como formato para intercambio de datos
//en el siguiente enlace puedes ver un ejemplo de un archivo JSON real de una API de peliculas
//https://yts.mx/api/v2/list_movies.json


//Para saber mas sobre JSON visitar:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON