function capicua(numero) {
  let numeroStr = numero.toString(); // Convertimos el número a una cadena
  let numeroInvertidoStr = numeroStr.split("").reverse().join(""); // Invertimos la cadena
  if (numeroStr === numeroInvertidoStr) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

// Ejemplo de uso
console.log(capicua(12321)); // Es capicua
console.log(capicua(12345)); // No es capicua
