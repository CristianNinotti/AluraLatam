
// En clase //

let rangoNumero = parseInt(prompt("¿Cual es el rango que quieres elegir para que se genere aleatoriamente? "))
let numeroSecreto = Math.floor(Math.random() * rangoNumero) + 1;
let numeroUsuario;
let contadorIntentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;
console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = parseInt(prompt(`¿Me indicas un numero entre 1 y el ${rangoNumero} `));

    console.log(typeof (numeroUsuario));

    if (numeroUsuario == numeroSecreto) {
        // Acertamos, fue verdadero la condicion
        // Operador ternario ${contadorIntentos == 1 ? (IF) "vez" : (ElSE) "veces"} abreviado
        alert(`Acertaste el numero es: ${numeroUsuario}. Lo hiciste en ${contadorIntentos} ${contadorIntentos == 1 ? "vez" : "veces"}`);
        break;
    }
    else {
        if (numeroUsuario > numeroSecreto) {
            //Indica si es menor el numero al ingresado
            alert("El numero secreto es menor");
        }
        else {
            //Indica si es mayor el numero al ingresado
            alert("El numero secreto es mayor");
        }
        // La condicion no se cumplio
        alert(" Lo siento, no acertaste el numero");
        //Contador de intentos, se incrementa en 1
        contadorIntentos += 1;
        //palabraVeces = "veces";

        if (contadorIntentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    }


}



// Desafio Unidad 1 - 09 //
/*
let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = '¡Error! Completa todos los campos';

alert ('Bienvenida y bienvenido a nuestro sitio web');
alert ('¡Error! Completa todos los campos');

nombre = prompt ("Ingrese el nombre de usuario");
edad = prompt ("Ingrese su edad");



if (edad >= 18)
{
    alert("Puedes obtener tu licencia de conducir");
}
*/

// Desafio Unidad 2 - 09 //
/*
let diaIngresadoUsuario = prompt("Ingresa que dia de la semana es");
if (diaIngresadoUsuario == "Sabado" || diaIngresadoUsuario == "Domingo")
{
    alert("Buen fin de semana");
} else
{
    alert("Buena semana");
}

let numeroIngresadoUsuario = prompt("Ingrese un numero");
if (numeroIngresadoUsuario >= 0)
{
    alert("El numero ingresado es positivo: " + numeroIngresadoUsuario);
}
else
{
    alert("El numero ingresado es negativo: " + numeroIngresadoUsuario);
}

let puntuacion = prompt("Ingrese su puntuacion en el juego");
if (puntuacion >= 100)
{
    alert("Felicidades, has ganado");
}
else
{
    alert("Intenta nuevamente para ganar");
}

let saldoDisponible = 100;
alert(`Su saldo disponible es: ${saldoDisponible}`);

let nombreUsuario = prompt("Ingrese su nombre");
alert(`Bienvenido al sistema ${nombreUsuario}`);
*/

// Desafio Unidad 3 - 07 //

//Contador desde 1 hasta 10//
/*
let contador = 1;

while (contador <= 10) {
    alert(`Vamos por el intento: ${contador}`);


    contador += 1;
}

//Contador desde 10 hasta 0//
let contador2 = 10;

while (contador2 >= 0)
{
    alert(`Vamos por el intento: ${contador2}`);

    contador2 -= 1;
}


//Cuenta progresiva//
let numeroIngresado;
contador3 = 0;

numeroIngresado = prompt("Ingrese un numero");
while(contador3 <= numeroIngresado)
{
    alert(`Vamos por el contador ${contador3}`);
    contador3 += 1
}

//Cuenta regresiva//
let numeroIngresado = prompt("Ingrese un numero");
let contador4 = numeroIngresado;

while (contador4 != 0)
{
    alert(`Vamos por el contador ${contador4}`);
    contador4 -= 1;
}
*/

// Desafio Unidad 4 - 09 //

/*
let nombreUsuario = "Cristian";
let lenguaje;
//Suma de valor1 y valor2 (5)//

let valor1 = 3;
let valor2 = 2;
let suma = valor1 + valor2;

//Resta de valor1 y valor2 (6)//
let valor1 = 5;
let valor2 = 3;
let resta = valor1 - valor2;

console.log(`Bienvenido ${nombreUsuario}`);
alert(`Bienvenido ${nombreUsuario}`);
lenguaje = prompt("Cual es el lenguaje que mas te gusta");
console.log(`El lenguaje que mas te gusta es ${lenguaje}`);
//Console.log de suma (5)
//console.log(`El valor1 es ${valor1} El valor2 es ${valor2} y la suma de ambos valores es ${suma}`);
//Console.log de resta (6)
console.log(`El valor1 es ${valor1} El valor2 es ${valor2} y la resta de ambos valores es ${resta}`);


//Pide al usuario ingresar su edad y verifica si es mayor de edad (7)//
let edadUsuario = parseInt(prompt("Ingrese su edad"));
if (edadUsuario >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("No eres mayor de edad");
}


//Verifica si es positivo, negativo o 0 (8)//

let numero = parseInt(prompt("Ingrese un numero"));
if (numero > 0){
    alert("El numero es positivo");
} else if (numero < 0) {
    alert("El numero es negativo");
} else {
    alert("El numero es 0");
}


//Bucle while para mostrar por console del 1 al 10 (9)//

let contador = 1;
while (contador <= 10) {
    console.log(`El contador va por el numero ${contador}`);
    contador ++;
}


//If else para verificar si la nota esta aprobada (10)//
let nota = 9;
if (nota >= 7){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

//Math.random para generar num aleatorio y muestra por consola (11)//

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//Math.random para generar num aleatorio entero entre 1 y 10 y muestra por consola (12)//

let numeroAleatorio = Math.floor(Math.random()*10)+1;
console.log(numeroAleatorio);

//Math.random para generar num aleatorio entero entre 1 y 1000 y muestra por consola (13)//

let numeroAleatorio = Math.floor(Math.random()*1000)+1;
console.log(numeroAleatorio);

*/