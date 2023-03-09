function reverseWords(str) {
  // Dividimos la cadena en palabras individuales
  let words = str.split(" ");

  // Invertimos cada palabra
  let reversedWords = words.map(function (word) {
    return word.split("").reverse().join("");
  });

  // Unimos las palabras invertidas en una sola cadena
  let reversedString = reversedWords.join(" ");

  return reversedString;
}

// Ejemplo de uso
let input = "The Henry Challenge is close!";
let output = reverseWords(input);
console.log(output); // ehT yrneH egnellahC si !esolc
