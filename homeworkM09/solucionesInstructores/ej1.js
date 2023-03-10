//Se recorre el objeto con un for-in para obtener la key de cada propiedad del objeto inicial
//luego se obtiene el valor de cada propiedad, se lo guarda en la variable valor luego
//con un push se agrega en el arreglo vacio un nuevo array compuesto por la propiedad y el valor
//del objeto inicial, formando asi un array de arrays que surgieron de un objeto padre
const newArray = [];
function objetoAArreglo(objeto) {
  for(let key in objeto){
    const miniArray = [key, objeto[key]];
    newArray.push(miniArray);
  }
  return newArray 
}

var miObjeto = { A: 1, B: 2, C: 3 };
var miArreglo = objetoAArreglo(miObjeto);
console.log(miArreglo); // debería imprimir [['A', 1], ['B', 2], ['C', 3]]

