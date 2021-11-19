function calcularMediana(lista){

    const es_par = lista.length % 2 == 0 ? true : false ;
    let mediana;
    lista.sort( function (a,b) {
        return a - b;
    });

    if(es_par){
        let primer_indice = lista.length / 2 - 1;
        let segundo_indice = primer_indice + 1;
        mediana = (lista[primer_indice] + lista[segundo_indice]) / 2 ;
    }
    else{
        let indice = Math.ceil(lista.length / 2 ) - 1;
        mediana = lista[indice];
    }

    return mediana;
}