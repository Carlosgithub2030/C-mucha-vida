export class Contacto {
  constructor(imagen, nombre, medico, fecha, hora, edad, notas) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.medico = medico;
    this.fecha = fecha;
    this.hora = hora;
    this.edad = edad;
    this.notas = notas;
    this.codigo = Math.floor(Math.random() * 1000);
  }
}
