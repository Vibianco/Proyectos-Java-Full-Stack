// Declaro una variable global

var numInterval;

function cambioDeColor() {
  numInterval = setInterval(flashTexto,1200); //van a pasar 1200 milisegundos y va a volver a llamar a la función flashTexto. setInterval es una función predefinida
}

function flashTexto() {
  var miElemento = document.getElementById('mi_mensaje')
  // console.log(miElemento)
  // miElemento.style.color adquiere un operador ternario para modificar
  miElemento.style.color = miElemento.style.color == 'pink' ? 'yellow':'pink';
}

// Frenar el loop
function detenerCambioDeColor() {
  console.log(numInterval)
  clearInterval(numInterval)
}

// Validación
document.addEventListener("DOMContentLoaded", function(){ // Se va a ejecutar la función al cargarse el DOM
  let formu = document.getElementById("formulario");
  formu.addEventListener('submit', validarForm); // ejecuta primero mi función antes de hacer submit
});

let cont = 0;

// Función para validar formulario
function validarForm(evento) {
  evento.preventDefault();
  var usuario = document.getElementById("usuario").value;
  
  // Validamos que el usuario no esté vacío
  if(usuario.length == 0) {
    alert('El campo usuario no puede ir vacío. Deberá ingresar su mail');
    return;
  }else{
    // Que el usuario tenga @
    for(const user of usuario) {
      console.log("Valor de usuario ingresado: " + user)
      if (user == "@") {
        cont++;
        break;
      }
    }
    if (cont == 0) {
      alert("El campo usuario debe contener un @. Ejemplo: mail@mail.com");
      return;
    }
  }

  //Validamos que pass>6 caracteres
  var password = document.getElementById('password').value;
  console.log("Password ingresado: " + password);

  if(password.lenght<6) {
    alert("Su contraseña debe contener al menos 6 caracteres");
    return;
  }

  this.submit(alert("Gracias por registrarse"));
}