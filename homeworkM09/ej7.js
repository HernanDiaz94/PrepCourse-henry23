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
