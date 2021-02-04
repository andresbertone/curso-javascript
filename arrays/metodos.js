/*
    .from(iterable) - Convierte en array el elemento iterable
*/

    // let word = 'Hola mundo';
    // console.log(Array.from(word));

/*
    .sort([callback]) - Ordena los elementos de un array alfabéticamente. Si le pasamos un callback los ordena en función del algoritmo que le pasamos.
    Con números no funciona
*/

    // const letters = ['b', 'c', 'z', 'a'];
    // console.log(letters.sort());

    // const numbers = [1,8,100,300,3];
    // console.log(numbers.sort());
    // console.log(numbers.sort((a,b) => a-b));
    // console.log(numbers.sort((a,b) => b-a));

/*
    forEach(callback(currenValue, [index])) - ejecuta la función indicada una vez por cada elemento del array
*/

    // const numbers = [12,25,47,84,98];
    // numbers.forEach((number) => console.log(number));
    // numbers.forEach((number, index) => console.log(`${number} está en la posición ${index}`));

/*
    .some(callback) - Comprueba si al menos un elemento del array cumple la condición
*/

/*
    .every(callback) - Comprueba si todos los elementos del array cumplen la condición
*/

    // const words = ['HTML', 'CSS', 'JavaScript', 'PHP'];
    // console.log(words.some(word => word.length > 2));
    // console.log(words.some(word => word.length > 10));
    
    // console.log(words.every(word => word.length > 2));
    // console.log(words.every(word => word.length > 10));

/* 
    .map(callback) - Transforma todos los elementos del array y devuelve uno nuevo
*/

    // const numbers = [12,25,47,84,98];
    // numbers.map((number) => console.log(number*2));

/* 
    .filter(callback) - Filtra todos los elementos del array que cumplen la condición y devuelve un nuevo array
*/

    // const numbers = [12,25,47,84,98];
    // const numbers2 = numbers.filter(number => number > 40);
    // console.log(numbers2);

/*
    .reduce(callback) - Reduce todos los elementos del array a un único valor
*/

   /* const numbers = [12,25,47,84,98];
    console.log(numbers.reduce((a,b) => a+b));

    const users = [
        {
            name: 'user 1',
            online: true
        },
        {
            name: 'user 2',
            online: true
        },
        {
            name: 'user 3',
            online: false
        },
        {
            name: 'user 4',
            online: true
        },
        {
            name: 'user 5',
            online: false
        },
        {
            name: 'user 6',
            online: true
        },
    ]

    const usersOnline = users.reduce((cont, user) => {
        if (user.online) {
            cont++
        }
        return cont
    }, 0)

    console.log(`Hay ${usersOnline} usuarios conectados`);*/