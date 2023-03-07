class LatinoAmerica {
	constructor() {
		this.paises = [ ];
	};
};
 
LatinoAmerica.prototype.agregarPais=function (pais) {
       this.paises.push(pais);
};
let continente = new LatinoAmerica();
continente.agregarPais('México');
console.log(continente.paises);


//ejemplo chafa
class Agenda{
       constructor(nombre, apellido, nro_telefono,){
              this.nombre = nombre;
              this.apellido = apellido;
              this.nro_telefono = nro_telefono;
              this.email = [];
       }
}

Agenda.prototype.agregarEmail=function (correo) {
       this.email.push(correo);
};
let correoUsuario= new Agenda();
correoUsuario.agregarEmail('hernan.diiaz@gmail.com');
console.log(correoUsuario.email);