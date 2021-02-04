const person = {
    name: 'Andres',
    age: 23,
    sons: ['Laura', 'Diego', 'Tomas', 'Lucas']
}

// console.log(person);
// console.log(person.name);
// console.log(person['name']);
// console.log(person);

// for (const key in person) {
//     console.log(person[key]);
// }

// for (const key in person) {
//     console.log(key);
// }

// for (const son of person.sons) {
//     console.log(son);
// }

console.log(`Hola ${person.name}. Tienes ${person.age} años y ${person.sons.length} hijos. Ellos se llaman ${person.sons.join(', ')}`);