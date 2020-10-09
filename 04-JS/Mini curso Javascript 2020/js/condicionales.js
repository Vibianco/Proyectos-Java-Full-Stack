var variable = true;
var edad = 28;

//if - else
/* if (condicion) {
    tareas a realizar
} else {
    tareas a realizar sino se cumple la condicion
} */

if (variable == true) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}

if (edad > 18 && edad < 30) {
    console.log("Sos adulto por si no sabias");
}

//switch
/* switch (expresión) {
  case valor1:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    [break;]
  case valor2:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    [break;]
  ...
  case valorN:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    [break;]
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    [break;]
} */

var opcion = 1;

switch (opcion) {
    case 1:
        console.log("Estamos en el caso 1");
        break;
    case 2:
        console.log("Estamos en el caso 2");
        break;
    default:
        console.log("Estamos en el caso por defecto, por si todo lo anterior no se cumplio");
        break;
}

//for, foreach, for..in, for..of
/* for (expresion-inicial; condicion; expresion-final) {
    sentencias
} */

var lista = [];

//cargo mi lista con los numeros del 0 al 10 con for
for (let i = 0; i <= 10; i++) {
    lista.push(i);
}

console.log(lista);

//ahora uso foreach para usar los datos de la lista
//tener en cuenta que segun mozilla el uso de foreach ya no es recomendable, reemplazar por for..of
lista.forEach(element => console.log(element));

//tambien podemos obtener el indice del elemento
lista.forEach((element, i) => console.log(element, i));

//for..of
//realizo lo mismo que con el foreach pero usando for..of
for (item of lista) {
    console.log(item);
}

//Para saber mas de condicionales e iteradores visitar:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/if...else
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for

//Ver tambien While y Do..While
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/while