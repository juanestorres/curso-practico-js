function calcularModa(numeros){
    const listaCantidadVeces = {};

    numeros.map(function(elemento){
        if (listaCantidadVeces[elemento]) {
            listaCantidadVeces[elemento] += 1;
        }
        else{
            listaCantidadVeces[elemento] = 1;
        }

    });

    const listaArray = Object.entries(listaCantidadVeces).sort( function( a , b){
         return b[1] - a[1]
    });

    return Number(listaArray[0][0]);
}