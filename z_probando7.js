//Funcion map

const array = [5,10,15,20,25];

//Forma normal
/* const dobles = numeros.map( function(numero){
    return numero*2;
});  */

//Forma con funcion de flecha y return implicito
//const dobles = numeros.map( numero => numero * 2);

//Ejemplo de uso de map para cambiar precios
/* 
const productos = [
    {id:1 , nombre: 'Papa', precio: 50},
    {id:2 , nombre: 'Tomate', precio: 100},
    {id:3 , nombre: 'Palta', precio: 150}
];

const productosConDescuento = productos.map(producto=>{
    if (producto.precio < 100) return producto;

    return {
        ...producto,
        precio: producto.precio*0.75
    }
});

console.log(productosConDescuento);
 */

//Ahora la funcion transformadora obtendra los id de los productos en un nuevo array
const productos = [
    {id:1 , nombre: 'Papa', precio: 50},
    {id:2 , nombre: 'Tomate', precio: 100},
    {id:3 , nombre: 'Palta', precio: 150}
];

//const idProductos = productos.map(producto=>producto.id);
const idProductos = productos.map(({id})=>id); //desestructuro producto para solo usar el id
console.log(idProductos);
const aPrecios = productos.map(({precio})=>`precio=$${precio}`); //desestructuro producto para solo usar el id
console.log(aPrecios);