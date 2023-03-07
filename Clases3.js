// EXPRESIÓN DE CLASE
class FootballPlayers {
    constructor(jugador) {
       this.jugador = jugador;
    }
    obtenerNombre(){
      console.log(this.jugador);
   }
 }
 let argentina = new FootballPlayers('Messi');
 let brasil = new FootballPlayers('Pele');
 
 argentina.obtenerNombre();
 brasil.obtenerNombre();

 