function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Brasil');
  viajar('Argentina');

  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log(`edad ${edad}, puede manejar`);
    } 
    else{
        console.log(`edad ${edad}, no puede manejar`);
    }
  }
  
  puedeManejar(18);