// La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
// propiedad.
// La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
// Ej:
// var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
// productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
// Pista: es una buena oportunidad para usar map.

// Tu código acá:

function pluck(array, propiedad) {
  var valoresPropiedad = array.map(function (objeto) {
    return objeto[propiedad];
  });
  return valoresPropiedad;
}

var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }];
var nombres = pluck(productos, 'name');
console.log(nombres); // ['TV LCD', 'Computadora']
