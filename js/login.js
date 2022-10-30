function login() {
  var user, pass;

  user = document.getElementById("usuario").value;
  pass = document.getElementById("contraseña").value;

  if (user == "usuario" && pass == "2042") {
    window.location = "administracion.html";
  } else {
    alert("por favor ingrese, nombre y usuario correctos");
  }
}

/*FORMULARIO DE CONTACTO*/

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
