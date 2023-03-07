function calcularOmega(R, L, C, r) {
   let discriminante = Math.pow(R, 4) - 4 * Math.pow(L, 2) * Math.pow(R, 2) * (-Math.pow(L, 2) * Math.pow(C, 2) * Math.pow(r, 2) + Math.pow(L*C, 2));
   let solucion = (-Math.pow(R, 2) + Math.sqrt(discriminante)) / (2 * Math.pow(L, 2));
   return console.log(solucion);
}

calcularOmega(1,1,1,1);
