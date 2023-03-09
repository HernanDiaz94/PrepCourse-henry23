function buscoInterseccion(array1, array2) {
  var interseccion = [];

  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j] && interseccion.indexOf(array1[i]) === -1) {
        interseccion.push(array1[i]);
      }
    }
  }

  return interseccion;
}

// Ejemplo de uso
console.log(buscoInterseccion([4, 2, 3], [1, 3, 4])); // [3,4]
console.log(buscoInterseccion([1, 2, 3], [4, 5, 6])); // []
console.log(buscoInterseccion([1, 2, 3, 4], [4, 5, 6])); // [4]
