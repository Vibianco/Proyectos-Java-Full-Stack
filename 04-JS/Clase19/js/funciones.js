//! declaro una variable global

var numInterval;

function cambioDeColor() {
  numInterval = setInterval(flashTexto,1200); //van a pasar 1200 milisegundos y va a volver a llamar a la función flashTexto. setInterval es una función predefinida
}

function flashTexto() {
  var miElemento = document.getElementById('mi_mensaje')
  // console.log(miElemento)
  // miElemento.style.color adquiere un operador ternario para modificar
  miElemento.style.color = miElemento.style.color == 'blue' ? 'yellow':'blue';
}

// stopear el loop
function detenerCambioDeColor() {
  console.log(numInterval)
  clearInterval(numInterval)
}