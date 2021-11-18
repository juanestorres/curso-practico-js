const  lista1 = [
    100,
    200,
    300,
    500
];



function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;

   /*  for (let i = 0; i < lista.length; i++) {
        const numero = lista[i];
        sumaLista += numero;

    } */

    const sumaLista = lista.reduce(
        function (valorAcumulado, valorActual){
            valorAcumulado += valorActual;
            return valorAcumulado;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}