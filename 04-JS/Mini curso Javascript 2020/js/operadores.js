var a = 5;
var b = 5;
var c = 2;
var d = "5";

//operadores aritmeticos: 
//suma: +
//resta: - 
//multiplicacion: *
//division: /
//exponenciacion: **
//modulo: % (resto de una division)

//operadores de asignacion
// +=, -=, *=, /=, %=, **=

a += 4;
console.log(a);

a %= 2;
console.log(a);

a *= 5;
console.log(a);

a **= 2;
console.log(a);

a /= 5;
console.log(a);

//operadores de comparacion: 
//igualdad: == devuelve true si son iguales
//igualdad estricta: === devuleve true si son iguales y del mismo tipo de dato
//desigualdad: != devuelve true si son distintos
//desigualdad estricta: !== devuelve true si son distintos valores o distintos tipos de datos
//<, >, <=, >=

console.log(a == b);
console.log(a == c);
console.log(a != c);
console.log(a !== d);
console.log(a == d);
console.log(a === d);

//operadores logicos
//&& (and), || (or), ! (distinto), ~ (not)

//operador ternario: condicion ? true : false;
var edad = 28;
var res = edad >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");

//Para ver todos los operadores que hay visitar:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators