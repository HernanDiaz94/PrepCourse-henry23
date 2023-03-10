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

/* //solucion
let arr = String(numero).split("");
let rigth = null;
let left = null;

if(arr.length%2 === 0){
  left = arr.slice(0, arr.length/2);
  rigth= arr.slice(arr.length/2);
} 

if (arr.length%2 === 1) {
  left = arr.slice(0, (arr.length-1)/2);
  rigth= arr.slice((arr.length+1)/2);
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    
  }
  
} */