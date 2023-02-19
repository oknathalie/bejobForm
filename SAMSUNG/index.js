function validar() {
  var miNombre = document.getElementsByName("nombre");
  var miEmail = document.getElementsByName("email");
  var miClave1 = document.getElementsByName("clave1");
  var miClave2 = document.getElementsByName("clave2");
  var miError = document.getElementById("error");

  if (
    miNombre.value == null ||
    miEmail.value == null ||
    miClave1.value == null ||
    miClave2.value == null
  ) {
    miError.innerHTML = "Debe completar todos los campos";
  }
}
