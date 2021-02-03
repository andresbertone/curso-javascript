// WHILE

//let pass = '';

// while (pass != 'hola') {
//     pass = prompt('Introduzca la contraseña');
// }

// console.log('Fin del bucle while');


// DO-WHILE

// do {
//     pass = prompt('Introduzca la contraseña');
// } while (pass != 'hola');

// console.log('Fin del bucle do-while');

// FOR

// let numeros = [50,41,52,23,94,5];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(`i vale ${i} y el valor de esa posición en el array es ${numeros[i]}`);
// }


// FOR OF

let names = ['Paco', 'Jose', 'Paula', 'Maria'];

for (let name of names) {
    console.log(name);
    console.log(names.indexOf(name));
}


// FOR IN

for (let index in names) {
    console.log(index);
    console.log(names[index]);
}