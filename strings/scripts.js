// STRINGS

let cadena = 'Hola Mundo';

console.log(cadena.length); // los espacios se cuentan como caracter


console.log(cadena.toUpperCase()); // convierte el texto a mayuscula


console.log(cadena.toLowerCase()); // convierte todo a minúscula


console.log(cadena.indexOf('M')); // devuelve la posición (primera coincidencia) de lo que le enviamos por parámetro. Si no lo encuentra devuelve -1
console.log(cadena.indexOf('Hola'));
console.log(cadena.indexOf('hola')); 
console.log(cadena.indexOf('o'));


console.log(cadena.replace('Mundo', 'Andres')); // Reemplaza el primer parámetro por el segundo


console.log(cadena.substring(3));
console.log(cadena.substring(3,8)); // extrae una subcadena. Los parámetros son el inicio y el fin. El inicio está incluído y el fin no.


console.log(cadena.slice(-3)); // es como substring pero admite valores negativos. Con número negativo empieza a contar para atrás.
console.log(cadena.slice(3, -4)); // acá empieza a contar desde el 3er caracter y los últimos 4 no los cuenta
console.log(cadena.slice(3));


let cadena2 = '            Hola youtube, estamos trabajando con cadenas';
console.log(cadena2);
console.log(cadena2.trim()); // elimina los espacios innecesarios


console.log(cadena.startsWith('H')); // para saber si la cadena empieza con esa letra
console.log(cadena.startsWith('h'));
console.log(cadena.startsWith('M', 5)); // si la 5 posición empieza con esa letra


console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a', 4));
console.log(cadena.endsWith('Mundo'));


console.log(cadena.includes('n')); // Parecido a indexOf pero devuelve true o false
console.log(cadena.includes('a', 5)); // empieza a contar desde la posición 5


console.log(cadena.repeat(3)); // repite el string las veces q le especificamos en el parámetro



// Template strings

let nombre = 'Andres'
let apellido = 'Bertone'
let edad = 23;

console.log('Hola ' + nombre + ' ' + apellido + ' tienes ' + edad + ' años.');

console.log(`Hola ${nombre} ${apellido} tienes ${edad} años.`); //template strings

console.log(`Hola ${nombre} ${apellido} tienes ${edad+1} años.`);