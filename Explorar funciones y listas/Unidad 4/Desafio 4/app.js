/* 1-Crea una lista vacía llamada "listaGenerica".*/

let listaGenerica = [];
let lenguagesDeProgramacionInversa = [];

/* 2- Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con
 los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'. */

 let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
 console.log(lenguagesDeProgramacion);

/* 3- Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'. */

lenguagesDeProgramacion.push('Java', 'Ruby','GoLang');


/* 4- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion. */

function muestraLenguajesDeProgramacion(lenguagesDeProgramacion){
    console.log(lenguagesDeProgramacion);
}

muestraLenguajesDeProgramacion(lenguagesDeProgramacion);

/* 5- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso. */

function muestraLenguajesDeProgramacionInverso(lenguagesDeProgramacion){
    for (let i = lenguagesDeProgramacion.length -1; i >= 0; i--){
        lenguagesDeProgramacionInversa.push(lenguagesDeProgramacion[i]);
    }
    console.log(lenguagesDeProgramacionInversa);
    
}

muestraLenguajesDeProgramacionInverso(lenguagesDeProgramacion);

/* 6-Crea una función que calcule el promedio de los elementos en una lista de números. */

let listaNumeros = [2,3,4,5];
let acumulador = 0;
let promedio = 0;

function promedioListaNumeros(listaNumeros){
    for (let i = 0; i < listaNumeros.length; i++ ){
    acumulador = acumulador + listaNumeros[i];
    }
    promedio = acumulador / listaNumeros.length;
}


promedioListaNumeros(listaNumeros);

console.log(`El promedio de la lista de elementos numeros es de ${promedio}`);

/* 7- Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista. */

function numeroMenorYMayor(listaNumeros){

    numeroMayor = 0;
    numeroMenor = listaNumeros[0];

    for (let i = 0; i < listaNumeros.length; i++) {
        if(listaNumeros[i]>numeroMayor){
            numeroMayor = listaNumeros[i];
        }
        if(listaNumeros[i]<numeroMenor){
            numeroMenor = listaNumeros[i];
        }
    }
    console.log(`El numero mayor en la lista de numero es ${numeroMayor} y el numero menor es ${numeroMenor}`);
}

numeroMenorYMayor(listaNumeros);

/* 8- Crea una función que devuelva la suma de todos los elementos en una lista */

function sumaElementosLista(listaNumeros){
    let sumaElementos = 0;
    for (let i = 0; i < listaNumeros.length; i++){
        sumaElementos = sumaElementos + listaNumeros[i];
    }
    console.log(`La suma de todos los elementos del array es ${sumaElementos}`);
}

sumaElementosLista(listaNumeros);

/* 9- Crea una función que devuelva la posición en la lista donde se encuentra
 un elemento pasado como parámetro, o -1 si no existe en la lista. */

numeroIndice = 4;

function elementoEnIndice(numeroIndice, listaNumeros){
    for (let i = 0; i < listaNumeros.length; i++){
        if(i == numeroIndice){
            return elementoEnPosicion = listaNumeros[i];
        }
    }
    return -1;
    
} 

let posicionEncontrada = elementoEnIndice(numeroIndice, listaNumeros);

if (posicionEncontrada !== -1){
    console.log(`El numero de elemento ${posicionEncontrada} se encuentra en la posicion ${numeroIndice}`);
} else {
    console.log(`El elemento ${posicionEncontrada} no se encuentra en la posicion ${numeroIndice}`);
}

/* 10- Crea una función que reciba dos listas de números del mismo tamaño
 y devuelva una nueva lista con la suma de los elementos uno a uno. */

let lista1 = [2,3];
let lista2 = [4,5];

function nuevaLista(lista1,lista2){
    let lista3 = [];
    for (let i = 0; i < lista1.length; i++){
        lista3.push(lista1[i]);
    }
    for (let j = 0; j < lista2.length; j ++){
        lista3.push(lista2[j]);
    }
    console.log(lista3);
    
}

nuevaLista(lista1,lista2);

/* 11- Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número. */

function cuadradoDeLista(listaNumeros){
    let listaCuadrada = [];
    for (let i = 0; i < listaNumeros.length; i++){
        listaCuadrada.push(Math.pow(listaNumeros[i], 2));
    }
    console.log(`El cuadrado de cada elemento en la lista es: ${listaCuadrada}`);
    return listaCuadrada;
}

cuadradoDeLista(listaNumeros);



