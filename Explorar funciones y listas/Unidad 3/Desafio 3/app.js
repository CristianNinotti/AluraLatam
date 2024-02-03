/* 1-Crea una función que calcule el índice de masa corporal (IMC) de una persona
a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros. */
// IMC = Indice de masa corporal se calcular Peso KG / Altura al cuadrado

let peso = 75;
let estatura = 1.70;
let imc = 0;

function imcPersona(peso, estatura, imc) {

    imc = peso / (estatura*estatura);

    return console.log(`El indice de masa corporal es ${imc}`);

}

imcPersona(peso, estatura, imc);

/* 2-Crea una función que calcule el valor del factorial de un número pasado como parámetro. */

function calcularFactorial(numero) {
    // Verificar si el número es negativo
    if (numero < 0) {
      return "El factorial no está definido para números negativos";
    }
  
    // Inicializar el resultado a 1
    let resultado = 1;
  
    // Calcular el factorial usando un bucle for
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  // Ejemplo de uso
  var numero = 5;
  var resultado = calcularFactorial(numero);
  console.log("El factorial de " + numero + " es: " + resultado);




/* 3- Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente 
    en reales(moneda brasileña,si deseas puedes hacerlo 
    con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80. */


let dolares = parseFloat(prompt(`Ingrese el valor de dolares a convertir en reales`));

function convertir(dolares){
  reales = dolares * 4.80
  return reales;
}

convertir(dolares);
console.log(`Su cotizacion de dolares a reales es de ${reales}`);

/* 4- Crea una función que muestre en pantalla el área y el perímetro 
de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros. */

let altura1 = 5
let ancho1 = 3


function calcularAreaPerimetro(altura1, ancho1){
  let perimetro = altura1*2 + ancho1*2;
  let area1 = altura1*ancho1;
  return console.log(`El perimetro del rectangulo es ${perimetro}  y su area es ${area1}`);
}

calcularAreaPerimetro(altura1, ancho1);

/* 5- Crea una función que muestre en pantalla el área y el perímetro de 
una sala circular, utilizando su radio que 
se proporcionará como parámetro. Considera Pi = 3,14. */

let radio = 8
let pi = 3.14
let area
let perimetro

function areaCirculo(radio, pi){
  area = pi * Math.pow(radio, 2);
  perimetro = 2 * pi * radio;
  console.log(`El area del circulo es ${area} y el perimetro es ${perimetro}`);
}

areaCirculo(radio, pi);

/* 6-Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. */

let num = 2;

function tablaMultiplicar(num){
  for(i = 0; i <= 9; i++){
    let resultado = i * num;
    console.log(`El ${num} por ${i} es ${resultado}`);
  }
}

tablaMultiplicar(num);