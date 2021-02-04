// let numeros = [1,2,3,4,5,6,7];
// console.log(numeros);

// console.log(numeros[0]); // Para devolver un elemento de la posición dada.

// console.log(numeros[0] + numeros[1]);

/*
    Propiedad:
        <array>.length - Devuelve número de posiciones que contiene el array
*/

// console.log(numeros.length);

/*    Métodos:
        Array.isArray() - Devuelve true si la variable es un array
*/

// let number = 4;
// console.log(Array.isArray(number));
// console.log(Array.isArray(numeros));

/*        
        .shift() - Elimina el primer elemento del array y devuelve ese valor

        .pop() - Elimina el último elemento de un array y devuelve ese elemento
*/

// console.log(numeros);
// console.log(numeros.shift());
// console.log(numeros);

// console.log(numeros);
// console.log(numeros.pop());
// console.log(numeros);

/*
        .push(element1, element2, ..) - Agrega uno o más elementos al final del array y devuelve el nuevo array

        .unshift(element1, element2, ..) - Agrega uno o más elementos al commienzo del array y devuelve el nuevo array
*/

// console.log(numeros.push(5));
// console.log(numeros);

// console.log(numeros.unshift(0));
// console.log(numeros);

/*
    .indexOf() - Devuelve el primer índice del elemento que coincida con el valor especificado, o -1 si ninguno coincide
*/

// console.log(numeros.indexOf(5));
// console.log(numeros.indexOf(9));

/*
    .lastIndexOf() - Devuelve el último índice que coincida con el valor especificado, o -1 si ninguno coincide
*/

// console.log(numeros.lastIndexOf(5));
// console.log(numeros.lastIndexOf(9));

/*
    .reverse() - Invierte el orden de los elementos
*/

// console.log(numeros);
// numeros.reverse();
// console.log(numeros);

/*
    .join('separador') - Devuelve un string con el separador que indiquemos, por defecto son comas
*/

// console.log(numeros);
// console.log(numeros.join('-'));

/*
    .splice(a, b, items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
        a - índice de inicio
        b - número de elementos (opcional)
        items - elementos a añadir en el caso de que se añadan (opcional)
*/

// console.log(numeros);
//numeros.splice(3); //Elimina desde la posición 3 en adelante

//numeros.splice(2,2); //Elimina desde la posición 2, la cantidad de elementos que le indicamos como 2do parámetro

/* numeros.splice(2,2,10);
numeros.splice(2,2,20,21,22); */ // si 'b' es un valor distinto de 0, elimina el númer ode valroes que indiquemos en el 2do parámetro y añade los valores de 'items' a partir de la posición 'a'

//numeros.splice(2,0,10,11,12); // si 'b' vale 0, añade los elementos a partir de la posición 'a' y no elimina ninguno
// console.log(numeros);

/*
    .slice(a,b) - Extrae elementos de un array desde el índice 'a' hasta el índice 'b'. Si no existe 'b' lo hace desde 'a' hasta el final. Si no existe ni 'a' ni 'b' hace una copia del original
*/

/*let newNumeros = numeros.slice();
console.log(newNumeros);
console.log(numeros);
*/

/*let newNumeros = numeros.slice(2);
console.log(newNumeros);
console.log(numeros);
*/

// let newNumeros = numeros.slice(2,3);
// console.log(newNumeros);
// console.log(numeros);
