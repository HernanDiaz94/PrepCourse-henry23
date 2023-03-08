// Esta función recibe un nombre (string).
// Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
// [Ejemplo]: "mario" ----> "Mario".
// Tu código:

function mayuscula(nombre) {
  return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

let mayus = mayuscula("hernan");
console.log(mayus);
