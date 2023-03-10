function numberOfCharacters(string) {
  let obj = {};
  for (let letter of string) {
    if (obj.hasOwnProperty(letter)) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
    return obj;
  }
}

var result = numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda");
console.log(result); // { a: 5, b: 2, c: 2, d: 4, f: 4, h: 1, j: 4, s: 5 }
