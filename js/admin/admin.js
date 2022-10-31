import { Contacto } from "./Contacto.js";
import { crearContactoTabla } from "./crearContactoTabla.js";
import {
  validateImagen,
    validateName,
  validateMedico,
  validateFecha,
  validateHora,
  validateEdad,
  
} from "./validators.js";

let contactosLS = localStorage.getItem("contactos");
contactosLS = JSON.parse(contactosLS);


let contactos = [];

if (contactosLS !== null) {
  contactos = contactosLS;

  contactos.forEach((elemento) => {
    crearContactoTabla(elemento);
  });
}

const formularioContacto = document.getElementById("formContacto ");

const campoImagen = document.getElementById("imagenContacto");
const campoNombre = document.getElementById("nombreContacto");
const campoMedico = document.getElementById("medicoContacto");
const campoFecha = document.getElementById("FechaContacto");
const campoHora = document.getElementById("HoraContacto");
const campoEdad = document.getElementById("EdadContacto");
const campoNotas = document.getElementById("notasContacto");

const buttonCargar = document.getElementById("buttonCargar");


let imagen = "";
let nombre = "";
let medico = "";
let fecha = "";
let hora = "";
let edad = "";
let notas = "";

campoImagen.addEventListener("blur", (e) => {
  if (validateImagen(e.target.value, campoImagen)) {
    imagen = e.target.value;
  }
});

campoNombre.addEventListener("blur", (e) => {
  if (validateName(e.target.value, campoNombre)) {
    nombre = e.target.value;
  }
});

campoMedico.addEventListener("blur", (e) => {
  if (validateMedico(e.target.value, campoMedico)) {
    medico = e.target.value;
  }
});

campoFecha.addEventListener("blur", (e) => {
  if (validateFecha(e.target.value, campoFecha)) {
    fecha = e.target.value;
  }
});

campoHora.addEventListener("blur", (e) => {
  if (validateHora(e.target.value, campoHora)) {
    hora = e.target.value;
  }
});

campoEdad.addEventListener("blur", (e) => {
  if (validateEdad(e.target.value, campoEdad)) {
    edad = e.target.value;
  }
});



campoNotas.addEventListener("blur", (e) => {
  notas = e.target.value;
});

const agregarContactoALS = (contacto) => {
  // agrego contacto a la lista
  contactos.unshift(contacto);
  //console.log(contactos)

  // JavaScript Object Notation
  const contactosJSON = JSON.stringify(contactos);
  //console.log(contactosJSON);

  localStorage.setItem("contactos", contactosJSON);
};

formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();

  let isEditando;

  if (buttonCargar.innerText === "Editar") {
    isEditando = true;
  } else isEditando = false;

  imagen = campoImagen.value;
  nombre = campoNombre.value;
  medico = campoMedico.value;
  fecha = campoFecha.value;
  hora = campoHora.value;
  edad = campoEdad.value;
  notas = campoNotas.value;

  if (
    validateImagen(imagen, campoImagen) &&
    validateName(nombre, campoNombre) &&
    validateMedico(medico, campoMedico) &&
    validateFecha(fecha, campoFecha) &&
    validateHora(hora, campoHora) &&
    validateEdad(edad, campoEdad)
    ) {
    if (!isEditando) {
      // esta creando un contacto nuevo
      const contacto = new Contacto(imagen, nombre, medico, fecha, hora, edad,  notas);

      agregarContactoALS(contacto);

      Swal.fire({
        title: "Exito",
        text: "El contacto se creó exitosamente",
        icon: "success",
      });
    } else {
      // esta editando un contacto
      const codigo = Number(sessionStorage.getItem("codigoEdicion"));
      sessionStorage.removeItem("codigoEdicion");

      const contactoIndice = contactos.findIndex((elemento) => {
        return elemento.codigo === codigo;
      });

      contactos[contactoIndice].imagen = imagen;
      contactos[contactoIndice].nombre = nombre;
      contactos[contactoIndice].medico = medico;
      contactos[contactoIndice].fecha = fecha;
      contactos[contactoIndice].hora = hora;
      contactos[contactoIndice].edad = edad;
      contactos[contactoIndice].notas = notas;

      localStorage.setItem("contactos", JSON.stringify(contactos));

      Swal.fire({
        title: "Exito",
        text: "El contacto se editó correctamente",
        icon: "success",
      });

      buttonCargar.innerText = "Cargar";
    }

    recargarDatos();

    campoImagen.value = "";
    campoNombre.value = "";
    campoMedico.value = "";
    campoFecha.value = "";
    campoHora.value = "";
    campoEdad.value = "";
    campoNotas.value = "";

    imagen = "";
    nombre = "";
    medico = "";
    fecha = "";
    hora = "";
    edad = "";
    notas = "";
  } else {
    Swal.fire({
      title: "Error",
      text: "Revisa los campos",
      icon: "warning",
    });
  }
});

export const recargarDatos = () => {
  const contactosLS = JSON.parse(localStorage.getItem("contactos"));

  //vaciar tabla
  const tbody = document.getElementById("tbody__admin");

  tbody.innerHTML = "";

  // crear nuevas filas
  contactosLS.forEach((elemento) => {
    crearContactoTabla(elemento);
  });
};



var fecha1 = new Date();
document.getElementById("FechaContacto").value = fecha1.toJSON().slice(0,10);





