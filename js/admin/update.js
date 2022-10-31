const campoImagen = document.getElementById("imagenContacto");
const campoNombre = document.getElementById("nombreContacto");
const campoMedico = document.getElementById("medicoContacto");
const campoFecha = document.getElementById("FechaContacto");
const campoHora = document.getElementById("HoraContacto");
const campoEdad = document.getElementById("EdadContacto");
const campoNotas = document.getElementById("notasContacto");
const buttonCargar = document.getElementById("buttonCargar");

export const cargarDatosEnFormulario = (codigo) => {
 
  const contactos = JSON.parse(localStorage.getItem("contactos"));

  const contactoAModificar = contactos.find((elemento) => {
    return elemento.codigo === codigo;
  });

  campoImagen.value = contactoAModificar.imagen;
  campoNombre.value = contactoAModificar.nombre;
  campoMedico.value = contactoAModificar.medico;
  campoFecha.value = contactoAModificar.fecha;
  campoHora.value = contactoAModificar.hora;
  campoEdad.value = contactoAModificar.edad;
  campoNotas.value = contactoAModificar.notas;

  buttonCargar.innerText = "Editar";

  sessionStorage.setItem("codigoEdicion", codigo);
};
