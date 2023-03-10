// La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
// en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
// recibe un string llamado 'nombre'.
// Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
// Ej:
//  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
//  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

// Tu código aca:

function buscarAmigo(amigos, nombre) {
  for (var i = 0; i < amigos.length; i++) {
    if (amigos[i].nombre === nombre) {
      return amigos[i];
    }
  }
  return amigos[i];
}

var amigos = [
  { nombre: "toni", edad: 33 },
  { nombre: "Emi", edad: 25 },
];
let busqueda = buscarAmigo(amigos, "toni"); //debe devolver { nombre: 'toni', edad: 33 };
console.log(busqueda);
