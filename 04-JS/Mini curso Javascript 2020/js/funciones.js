//son un conjunto de sentencias que realizan una tarea
//a continuacion diferentes formas de declarar una funcion

function saludo() {
    console.log("Hola Mundo");
}

saludo();

function miSuma(a, b) {
    let resultado = a + b;
    console.log(resultado);
}

miSuma(4, 5);

function miResta(a, b) {
    return a - b;
}

console.log(miResta(8, 2));

var miDivision = function(a, b) {
    return a / b;
}

console.log(miDivision(10, 5));

//funciones flecha o arrow function
var acceso = true;

//var accesoU = (a) => a; //retorna un solo valor, recibe un solo parametro puede o no llevar parentesis
//var accesoU = () => a; //retorna un solo valor, no recibe parametros por lo que lleva parentesis
var accesoU = (a, nom) => {
    console.log(`Usuario ${nom} en ejecucion`);
    return a;
}

accesoU(acceso, 'Matt') == true ? console.log("Usuario permitido") : console.log("Usuario denegado");

//Para saber mas sobre funciones visitar:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones