// La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
// Esta devuelve true o false dependiendo de si el número es simétrico o no.
// Un número es simétrico cuando es igual a su reverso.
// Ej:
// numeroSimetrico(11711) devuelve true

// Tu código:

function numeroSimetrico(num) {
  var str = num.toString(); // convertir el número en un string
  var strInvertido = str.split("").reverse().join(""); // invertir el string
  return str === strInvertido; // comparar los strings
}

let numero = 12321;
let result = numeroSimetrico(numero);
console.log(result);
