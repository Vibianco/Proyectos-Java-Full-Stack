//creo mis objetos
var pelicula1 = { titulo: "Avatar", anio: 2009, valoracion: 5 };
var pelicula2 = { titulo: "Misiom Imposible", anio: 1996, valoracion: 4 };
var pelicula3 = { titulo: "Top Gun", anio: 1986, valoracion: 4 };
var pelicula4 = { titulo: "El último Samurai", anio: 2003, valoracion: 5 };
var pelicula5 = { titulo: "Al Filo del Mañana", anio: 2014, valoracion: 5 };

//armo mi array
var peliculas = [pelicula1, pelicula2, pelicula3, pelicula4, pelicula5];

//creo la funcion que suma 1 a valoracion si esta es mayor o igual a 5
let sumarValoracion = ({ valoracion }) => valoracion >= 5 ? valoracion += 1 : valoracion += 0;

//la funcion map hace un recorrido de nuestro array como si usaramos un for, es decir, "mapea" la lista
let valorado = peliculas.map(sumarValoracion);

console.log(valorado);

//Reduce
//creo mi funcion que le suma una valoracion de pelicula a mi acumulador
let reducirValoracion = (acumulador, { valoracion }) => acumulador + valoracion;

//recorro mi array con reduce y reduzco los valores hasta tener uno solo que tiene que ser 23 en este caso
let miValoracionTotal = peliculas.reduce(reducirValoracion, 0);

console.log(miValoracionTotal);

//Para saber mas sobre Map y Reduce visitar:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce