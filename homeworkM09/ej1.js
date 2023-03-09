//Se recorre el objeto con un for-in para obtener la key de cada propiedad del objeto inicial
//luego se obtiene el valor de cada propiedad, se lo guarda en la variable valor luego
//con un push se agrega en el arreglo vacio un nuevo array compuesto por la propiedad y el valor
//del objeto inicial, formando asi un array de arrays que surgieron de un objeto padre
var arreglo = [];
function objetoAArreglo(objeto) {
  var arreglo = [];
  for (var propiedad in objeto) {
    var valor = objeto[propiedad];
    arreglo.push([propiedad, valor]);
  }
  return arreglo;
}

var miObjeto = { A: 1, B: 2, C: 3 };
var miArreglo = objetoAArreglo(miObjeto);
console.log(miArreglo); // debería imprimir [['A', 1], ['B', 2], ['C', 3]]
