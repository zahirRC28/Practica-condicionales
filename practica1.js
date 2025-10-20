/*Ejercicio 1: Verificar si un número es positivo, negativo o cero
Escribe una función llamada verificarNumero que reciba un número como argumento 
y devuelva si el número es positivo, negativo, o cero.*/
let num = 5;
function verificarNumero(num){
    if(num > 0){
        return "El número es positivo";
    }else if(num < 0){
        return "El número es negativo";
    }else{
        return "El número es cero";
    }
};
console.log(verificarNumero(num));

/* Ejercicio 2: Edad legal para votar
Escribe una función llamada puedeVotar que reciba la edad de una persona 
y devuelva si una persona tiene 18 años o más y devuelva "Puede votar" 
o "No puede votar".*/
let edad = 20;
function puedeVotar(edad){
    if(edad >= 18){
        return "Puede votar";
    }else{
        return "No puede votar";
    }
};
console.log(puedeVotar(edad));

/*Ejercicio 3: Mayor de dos números 
Escribe una función llamada mayorDeDos que reciba dos números y
devuelva el mayor de los dos. Si son iguales, devuelve un mensaje indicando que son iguales.*/
let num1 = 1;
let num2 = 2;
function mayorDeDos(num1 , num2){
    if(num1 == num2){
        return "los numeros son iguales";
    }else if(num1 > num2){
        return num1 + " es mayor que " + num2;
    }else if(num2 > num1){
        return num2 + " es mayor que " + num1;
    }
};
console.log(mayorDeDos(num1,num2));


/*Ejercicio 4: Determinar si un número es divisible por 5
Escribe una función llamada esDivisiblePorCinco que reciba un número y
 devuelva true si el número es divisible por 5 o false si no lo es.*/

 let nume = 20;
 function esDivisiblePorCinco(nume){
    if(nume%5 === 0){
        return true;
    }else
        return false;
 };
 console.log(esDivisiblePorCinco(nume));

/*Ejercicio 5: Clasificar nota de examen

Escribe una función llamada clasificarNota que reciba una nota entre 0 y 100 y devuelva una clasificación:

Nota >= 90: "Excelente"
Nota >= 70 y < 90: "Buena"
Nota >= 50 y < 70: "Regular"
Nota < 50: "Insuficiente" */

let nota = 10;
function clasificarNota(nota){
    if(nota < 50){
        return "Insuficiente";
    }else if(nota >= 50 && nota < 70){
        return "Regular"
    }else if(nota >= 70 && nota < 90){
        return "Buena"
    }else if(nota >= 90){
        return "Excelente"
    }
};
console.log(clasificarNota(nota));