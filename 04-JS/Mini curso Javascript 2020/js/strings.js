//concatenacion de texto y variables

var nombre = "Juanito El Pocastrancas";
var edad = 28;

//forma 1 de concatenar
console.log('Mi nombre es ' + nombre + ' y tengo ' + edad + ' años.');
//forma 2 de concatenar
console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);
//para poner las comillas invertidas es: Alt + 96

//Metodos Strings
console.log(nombre.toUpperCase()); //comvierte toda la cadena a mayusculas
console.log(nombre.toLowerCase()); //convierte toda la cadena a minusculas
console.log(nombre.length); //devuelve la longitud de la cadena

//Para tener toda la informacion completa sobre el manejo de Strings visitar:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String