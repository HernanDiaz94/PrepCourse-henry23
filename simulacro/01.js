// La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
// Debe devolver un arreglo con solo los enteros.
// Ej:
// soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

// Tu código aca:

function soloNumeros(array) {
  var numeros = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      numeros.push(array[i]);
    }
  }
  return numeros;
}

let arrayNum = ["a", 1, "b", 2, "c", 3];
console.log(soloNumeros(arrayNum));
