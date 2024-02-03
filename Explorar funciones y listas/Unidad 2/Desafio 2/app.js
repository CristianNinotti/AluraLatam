// 1- Crear una función que muestre "¡Hola, mundo!" en la consola. //
function holaMundo(){
    console.log("Hola mundo");
    return;
}

holaMundo();

// 2-Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola. //

let nombre = "Cristian";

function holaMundoConNombre(nombre){
    console.log(`Hola ${nombre}`);
    return;
}

holaMundoConNombre(nombre);

// 3-Crear una función que reciba un número como parámetro y devuelva el doble de ese número //

let numero = 16;

function dobleDeNumero(numero){
    return console.log(numero*2);
}

dobleDeNumero(numero);

// 4-Crear una función que reciba tres números como parámetros y devuelva su promedio.//

let numero1 = 11
let numero2 = 25
let numero3 = 33

function promedioTresNumeros(numero1,numero2,numero3){
    return console.log((numero1+numero2+numero3)/3);
}

promedioTresNumeros(numero1,numero2,numero3);

// 5-Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.//

function numeroMayor(numero1,numero2){
    if(numero1>numero2){
        return console.log(numero1);
    } else{
        return console.log(numero2);
        }
}

numeroMayor(numero1,numero2);

// 6-Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.//

function numeroMultiplicadoPorSiMismo(numero1){
    return console.log(numero1*numero1);
}

numeroMultiplicadoPorSiMismo(numero1);