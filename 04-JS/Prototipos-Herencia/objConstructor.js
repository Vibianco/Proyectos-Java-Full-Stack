/* creo un tipo Persona a través de una función. "clase" persona */
var Persona = function (nombre, anioNac){
  this.nombre = nombre;
  this.anioNac = anioNac;
}
/* se coloca el prototype fuera de la función para que no pase a ser heredado por Directivos */
Persona.prototype.saludar = function () {
  return "Hola soy " + this.nombre
}
/* comparar dos personas */
Persona.diferenciaAnios = function(persona1, persona2) {
  return "La diferencia de edad es: " + (persona1.anioNac - persona2.anioNac) + " años"
}
/* creamos un directivo con también funciones de Persona. Es decir, clase directivo extiende persona */
var Directivo = function (nombre, colegio){
  /* pongo pre-seteado el año de nacimiento */
  Persona.call(this, nombre, 1950);
  this.colegio = colegio;
}
/* heredar el prototipo de persona */
Directivo.prototype = Object.create(Persona.prototype);
/* agrego una función de despedida */
Directivo.prototype.despedirse = function() {
  return "Adiós, los saluda " + this.Nombre + " del colegio " + this.colegio
}

/* Como se creó el directivo pero más fácil: */
class Secretario extends Persona{
  constructor(nombre, colegio) {
    super(nombre);
    this.colegio = colegio;
  }
  despedirse() {
    return "Saluda el secretario " + this.nombre + " del colegio " + this.colegio;
  }
}

/* uso de objetos */

var vivi = new Persona("Vivi", 1996);

var vaio = new Persona("Violet", 2016);

var directorPepito = new Directivo("Pepito","ColegioPi")

var secretarioPedro = new Secretario("Pedro","Colegio 23")