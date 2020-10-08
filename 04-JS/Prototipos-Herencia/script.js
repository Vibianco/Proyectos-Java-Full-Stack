/* se podría crear uno para cada objeto, pero conviene crear el tipo vacío e ir completándolo como veremos a continuación (esto es POO)*/
var Videojuego = {
  titulo: "",
  consola: "",
  /* método */
  jugar() {
    console.log("Estoy jugando a "+ this.titulo + " en la consola " + this.consola);
  }
}

var Mario = Object.create(Videojuego);
  /* crear un "constructor" a través de un método para no tener que escribir cada objeto */
  Mario.__init = function(titulo, version) {
    this.titulo = titulo;
    this.version = version;
  }
Mario.version = 0;
Mario.consola = "Nintendo";

/* en minúscula porque es una instancia, y no un tipo. Como no se completó el tipo de consola, tomará el del padre (Nintendo) */
var marioUno = Object.create(Mario)
marioUno.titulo = "Mario, the first"
marioUno.version = 1

/* creo otra versión a través del constructor. Es menos código */
var marioDos = Object.create(Mario)
marioDos.__init("Mario, the second", 2);

/* Creamos otro objeto */
var Sonic = Object.create(Videojuego);
Sonic.__init = function(titulo, version, consola) {
  this.titulo = titulo;
  this.version = version;
  this.consola = consola;
}

var sonicUno = Object.create(Sonic)
sonicUno.__init("Sonic 1", 1, "Sega");