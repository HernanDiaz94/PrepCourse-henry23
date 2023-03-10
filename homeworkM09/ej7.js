function sortArray(arrayOfStrings) {
  arrayOfStrings.sort(function (a, b) {
    return a.length - b.length;
  });
  return arrayOfStrings;
}

// Ejemplo de uso
console.log(sortArray(["You", "are", "beautiful", "looking"])); // ["You", "are", "looking", "beautiful"]
console.log(sortArray(["a", "bc", "def", "ghij"])); // ["a", "bc", "def", "ghij"]
console.log(sortArray(["abcd", "efg", "hi", "j"])); // ["j", "hi", "efg", "abcd"]



/* //solucion con metodo burbuja
for (let i = 0; i < array.length-1; i++) {
  for (let j = i; j < array.length; j++) {
  let temp= array[i];
  array[i] = array[j];
  array[j] = temp;
  }
} */