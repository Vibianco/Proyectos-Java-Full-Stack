var user = "Mantecoso";
var objetoExterno = {
    titulo: "este objeto esta fuera de tu objeto pero lo ponemos dentro para verlo aunque sigue estando afuera...pero adentro (O.o)",
    name: "objeto externo funcionando"
}

//forma clasica de definir un objeto o clase de JS
var miObjeto = {
    //calve : valor
    nombre: "Ron",
    apellido: "Damon",
    texto: `interpolacion de texto by ${user}`,
    objetoInterno: {
        clave: "Estas en un objeto, dentro de otro objeto (°O°)"
    },
    objetoAlien: objetoExterno,
    fecha: new Date(),
    goldEgg: "Matt el papasote hizo esta recopilación sádica",
    prueba: "Texto para probar mas funcionalidades, si lo ves es porque estoy funcionando"
}

console.log(miObjeto.texto);
console.log(miObjeto.objetoInterno.clave);
console.log(miObjeto.objetoAlien.titulo);
console.log(miObjeto.fecha);

//desestructuracion de objetos
var { nombre } = miObjeto;

console.log(nombre);

//desglosamiento de objeto
var otraFuncion = ({ prueba }, { objetoAlien }) => {
    console.log(prueba);
    console.log(objetoAlien.name);
};

console.log(otraFuncion(miObjeto, miObjeto));

//Para saber mas sobre objetos visitar:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos