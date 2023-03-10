// La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
// y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
// Ej:
// stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
// stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

// Tu código aca:

function stringMasLarga(strings) {
  let stringMasLargo = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > stringMasLargo.length) {
      stringMasLargo = strings[i];
    }
  }
  return stringMasLargo;
}

let s1 = stringMasLarga(["hi", "hello", "ni hao", "guten tag"]);
let s2 = stringMasLarga(["JavaScript", "HTML", "CSS"]);

console.log(s1); //'guten tag'
console.log(s2); //'JavaScript'
