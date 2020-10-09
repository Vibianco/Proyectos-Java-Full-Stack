function validar(){

  user = document.getElementById('user').value;
  pass = document.getElementById('pass').value;

  console.log("Usuario: "+user);
  console.log("Contraseña: "+pass);

  pipi = user.includes('@');
  console.log(pipi);

  console.log("Caracteres user: "+user.length);
  console.log("Caracteres pass: "+pass.length);

  switch (user,pass) {
    case '','':
      console.log("No se completaron los datos");
      break;
    case "hola","hola":
      console.log("hola");
      break;
    default:
      console.log("Estamos en el caso por default");
      break;
  }
}

// Mediante el uso del evento que se ejecuta en el momento del envío del formulario se valide que los cuadros de texto correspondientes a “usuario y clave” no se encuentren vacíos y que el cuadro de texto del “usuario” incluya un arroba. Si ambos campos no se validan correctamente el formulario no debe enviarse y deberá desplegarse una ventana indicando el motivo por el cual no puede ingresar por ej: “Falta el arroba en el usuario”