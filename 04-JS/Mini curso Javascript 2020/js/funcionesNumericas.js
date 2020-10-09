var a = 50;
var b = 10.45;
var c = "20";
var d = "15.4890";

var res = Number.isInteger(a); //devuelve true si es entero o false caso contrario
var res2 = Number.isInteger(b);
var res3 = Number.parseInt(b); //convierte un numero decimal a entero o un string
var res4 = Number.parseInt(c);
var res5 = Number.parseFloat(d).toFixed(2); //corta la cantidad de decimales

console.log(res);
console.log(res2);
console.log(res3);
console.log(res4 + " es de tipo " + typeof(res3) + " gracias a parseInt()");
console.log(res5);

//Para saber mas sobre funciones numericas visitar:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number