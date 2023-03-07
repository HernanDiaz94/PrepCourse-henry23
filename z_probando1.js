//Ejercicio M6
var objetoUsuario= {
    nombre: 'Hernan',
    email: 'hernan.diiaz@gmail.com'
}

function tieneEmail(objetoUsuario) {
    // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
    // En ese caso retornar true. Caso contrario, false.
    // Tu código:
    console.log(objetoUsuario.hasOwnProperty("email")!= undefined);
    if(objetoUsuario.hasOwnProperty("email")!= undefined){
       return true;
    }  else{
       return false;
    }
 }
 tieneEmail(objetoUsuario);