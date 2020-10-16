document.addEventListener("DOMContentLoaded", function(){
  let formu = document.getElementById("formulario");
  formu.addEventListener('submit', validarForm);
});

function validarForm(evento){
  evento.preventDefault();
  var user = document.getElementById("user").value;
  var password = document.getElementById("password").value;

  if (user.length === 0){
    document.getElementById("user").style.border = "3px solid red"; 
    alert("Debe ingresar un usuario");
    return; 
  }
  else if (user.includes('@') === false){
    document.getElementById("user").style.border = "3px solid red";
    window.alert("El usuario debe contener un @. Ejemplo: tumail@mail.com");
    return;
  }
  if (password.length < 6){
    document.getElementById("password").style.border = "3px solid red"; 
    alert("Debe ingresar una contraseña de al menos 6 caracteres");
    return;
  }

  this.submit(alert("Gracias por registrarse"));
}