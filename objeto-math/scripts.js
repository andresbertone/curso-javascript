// OBJETO MATH

/* 
    Math.E --> Devuelve la constante 'e'

    Math.PI --> Devuelve el valor de 'pi'
*/

// MÉTODOS

/* 
    Math.abs(x) --> Devuelve el valor absoluto de 'x'

    Math.ceil(x) --> Devuelve el entero más grande mayor o igual que un número

    Math.floor(x) --> Devuelve el entero más pequeño menor o igual que un número

    Math.pow(x, y) --> Devuelve la potencia de 'x' elevado a la 'y'

    Math.random() --> Genera un número pseudoaleatorio entre 0 y 1

    Math.round(x) --> Devuelve el valor de un número redondeado al entero más cercano

    Math.sign(x) --> Devuelve -1, 1 o 0 dependiendo si es negativo, positivo o cero

    Math.sqrt(x) --> Devuelve la raíz cuadrada del número 'x'
*/

console.log(Math.abs(-20));
console.log(Math.abs(19));

console.log(Math.ceil(-20.8));
console.log(Math.ceil(5.3));

console.log(Math.floor(-25.6));
console.log(Math.floor(10.3));

console.log(Math.pow(2,3));

console.log(Math.random());
console.log(Math.random()*100);

console.log(Math.round(-20.8));
console.log(Math.round(10.2));

console.log(Math.sign(-20.8));
console.log(Math.sign(15));
console.log(Math.sign(0));

console.log(Math.round(Math.random()*100));

console.log(Math.sqrt(9));

// console.log(Math.random()* (max - min) + min) Devuelve un número pseudoaleatorio entre min y max

console.log(Math.random()*(10-5)+5)