//Codigo del cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + ' centimetros.');

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log('El perimetro del cuadraro mide: ' + perimetroCuadrado + ' centimetros.');

function areaCuadrado(lado){
    return lado ** 2;
}
//console.log('El area del cuadrado es: ' + areaCuadrado + ' centimetros cuadrados.');
//console.groupEnd();

//Codigo del triangulo
console.group('Triangulo')
/* const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triangulo miden: " + ladoTriangulo + ' cm, ' + ladoTriangulo2 + ' cm, ' + baseTriangulo + "cm.");

const perimetroTriangulo = ladoTriangulo+ladoTriangulo2+baseTriangulo;
console.log('El perimetro del triangulo mide: ' + perimetroTriangulo + ' centimetros.'); */

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

/* const areaTriangulo = baseTriangulo * ((ladoTriangulo ** 2 - ((baseTriangulo/2) ** 2)) ** (1/2)) / 2;
console.log('El area del triangulo es: ' + Math.round(areaTriangulo * 100) / 100 + ' centimetros cuadrados.');
console.groupEnd(); */

function areaTriangulo(base, altura){

    return base * altura / 2;
}

//Codigo del circulo

console.group("Circulos");

//Radio
/* const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm"); */
//Diametro
/* const diametroCirculo = radioCirculo*2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm"); */
function diametroCirculo(radio){
    return radio * 2;
}
//PI
const pi = Math.PI;
console.log("PI es: " + pi);

//Circunferencia
function perimetroCirculo(radio){
    return diametroCirculo(radio) * pi
}


/* const perimetroCirculo = diametroCirculo * pi;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm"); */
//Area
/* const areaCirculo = pi * radioCirculo ** 2;
console.log("El area del circulo es: " + areaCirculo + "cm");
console.groupEnd() */

function areaCirculo(radio){
    return radio ** 2 * pi
}

function calcularPerimetroCuadrado(){
    var lado = document.getElementById("input-lado-cuadrado");
    var perimetro = perimetroCuadrado(lado.value);
    alert("El perimetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado(){
    var lado = document.getElementById("input-lado-cuadrado");
    var area = areaCuadrado(lado.value);
    alert("El perimetro del cuadrado es: " + area);
}



function calcularPerimetroTriangulo(){
    var lado1 = document.getElementById("input-lado1-triangulo");
    var lado2 = document.getElementById("input-lado2-triangulo");
    var base = document.getElementById("input-lado3-triangulo");
    var perimetro = perimetroTriangulo(Number(lado1.value), Number(lado2.value), Number(base.value));
    alert("El perimetro del cuadrado es: " + perimetro);
}

function calcularAreaTriangulo(){
    var base = document.getElementById("input-lado3-triangulo");
    var altura = document.getElementById("input-altura-triangulo");
    var area = areaTriangulo(base.value, altura.value);
    alert("El area del triangulo es: " + area);
}


function calcularPerimetroCirculo(){
    var radio = Number(document.getElementById("input-radio-circulo").value);
    perimetro = perimetroCirculo(radio);
    alert("El perimetro del circulo es: " + perimetro);
}

function calcularAreaCirculo(){
    var radio = Number(document.getElementById("input-radio-circulo").value);
    area = areaCirculo(radio);
    alert("El area del circulo es: " + area);
}