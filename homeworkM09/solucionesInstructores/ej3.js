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


/* //solucion
let minus ="";
let mayus ="";

const minusculas = 'abcdefghijklmnopqrstvxyz';

//forma1
for(let letter of string){
  if(minisculas.includes(letter)){
    minus += letter;
  } else {
    mayus += letter;
  }
  return mayus + minus;
}

//forma2
for(let letter of string){
  if(letter === letter.toUpperCase()){
    minus += letter;
  } else {
    mayus += letter;
  } 

  return mayus + minus;
}
 */