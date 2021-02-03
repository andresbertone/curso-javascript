//let num = -2;

// if (num > 0) {
//     console.log(`${num} es mayor que cero`);
// } else if (num < 0) {
//     console.log(`${num} es menor que cero`);
// } else {
//     console.log(`${num} es igual a cero`);
// }

// let num1 = 2;
// let num2 = 10;
// if (num1 > 0 && num2 > 0) {
//     console.log(`${num1} y ${num2} son mayores que cero`);
// }

// if (num1 > 0 || num2 > 0) {
//     console.log(`${num1} o ${num2} son mayores que cero`);
// }



// EJERCICIO

/* const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let num1 = prompt('Introduza el primer número');
let num2 = prompt('Introduza el segundo número');
let num3 = prompt('Introduza el tercer número');

numbers.textContent = `Los números introducidos son ${num1}, ${num2}, ${num3}`

if (num1 >= num2 && num1 >= num3) {
    if (num2 > num3) {
        result.textContent = `El orden es: ${num1}, ${num2}, ${num3}`;
    } else {
        result.textContent = `El orden es: ${num1}, ${num3}, ${num2}`;
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 > num3) {
        result.textContent = `El orden es: ${num2}, ${num1}, ${num3}`;
    } else {
        result.textContent = `El orden es: ${num2}, ${num3}, ${num1}`;
    }
} else if (num3 >= num1 && num3 >= num2) {
    if (num1 > num2) {
        result.textContent = `El orden es: ${num3}, ${num1}, ${num2}`;
    } else {
        result.textContent = `El orden es: ${num3}, ${num2}, ${num1}`;
    }
} */



// CONDICIONAL SWITCH-CASE

/* let num = 3;

switch (num) {
    case 1: 
        console.log('Num tiene el valor 1');
        break;
    case 2: 
        console.log('Num tiene el valor 2');
        break;
    default:
        console.log(`${num} no vale ni 1 ni 2`);
}


switch (num) {
    case 1:
    case 3:
    case 5:
        console.log(`${num} es impar`);
        break;
    case 2:
    case 4:
    case 6:
        console.log(`${num} es par`);
        break;
} */


// OPERADOR TERNARIO

// (condición) ? true : false;
// solo cuando tenga una sentencia

/* (condicion) ?
        (primera sentencia,
        segunda sentencia)
        :
        (primera sentencia,
        segunda sentencia) */

let num = 2;
(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

(num % 2 == 0) ? 
    (
        console.log(`${num} es par`), console.log(`${num} es par 2`)
    )
    :
    console.log(`${num} es impar`);