/* let cadena = ["hola","chau"];
console.log(cadena.reverse()); */

class Persona {
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
  }

  detalle() {
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      domicilio: this.domicilio,
    };
  }
}

const persona1 = new Persona("Juan", "Pérez", 30, "Calle Falsa 123");
console.log(persona1.detalle());
