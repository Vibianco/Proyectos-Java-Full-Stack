//Lista simple
var miArray = ["Elemento 1", "Elemento 2", 3, 4.1, true];

//recorrido simple de la lista
for (i = 0; i < miArray.length; i++) {
    console.log(miArray[i] + ' es de tipo ' + typeof(miArray[i]));
}

//complicando mas las cosas
var permitido = "Usuario Permitido";
var miFuncion = acceso => acceso;
var Persona = {
    nombre: "Pepe",
    miAutomovil: [
        pintura = {
            marca: "Reanault",
            precio: 100000,
            color: "blanco"
        },
        vendedor = {
            nombre: "Juan",
            edad: 28
        }
    ]
};

//creando una lista mas compleja con funciones y objetos
var miArray2 = ["Matt", 2020, false, miFuncion(permitido), Persona];

//accediendo a los elementos de la lista y a los elementos dentro de sus elementos
console.log(miArray2[0]);
console.log(miArray2[3]);
console.log(miArray2[4].miAutomovil[0].color);
console.log(miArray2[4].miAutomovil[1].nombre);

//Para saber mas sobre Arrays visitar:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array