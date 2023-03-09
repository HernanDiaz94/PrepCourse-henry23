function numberOfCharacters(string) {
  var result = {};
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter]++;
  }
  var orderedResult = {};
  var keys = Object.keys(result);
  keys.sort();
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    orderedResult[key] = result[key];
  }
  return orderedResult;
}

var result = numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda");
console.log(result); // { a: 5, b: 2, c: 2, d: 4, f: 4, h: 1, j: 4, s: 5 }
