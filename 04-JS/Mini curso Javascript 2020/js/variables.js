//Diferencia entre let, var y const

//var, varibles globales
var saludo = "Hola";

if (saludo) {
    var saludo = "Hola Mundo";
    console.log(saludo);
}
console.log(saludo);

//let, varibles limitadas al bloque donde son definidas
let nombre = "El Wachimango";

if (nombre) {
    let nombre = "El 5to Teletubiees";
    console.log(nombre);
}
console.log(nombre);

//const, varibles inmutables
const PI = 3.14;
//PI = 50; esto da error por intentar modificar el valor de una constante
console.log(PI);

//Para saber mas sobre declaracion de variables visitar:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Grammar_and_types#Declaraciones