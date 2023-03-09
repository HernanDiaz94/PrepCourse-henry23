function capToFront(string) {
  var upper = "";
  var lower = "";
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (letter === letter.toUpperCase()) {
      upper += letter;
    } else {
      lower += letter;
    }
  }
  return upper + lower;
}

var result = capToFront("soyHENRY");
console.log(result); // "HENRYsoy"
