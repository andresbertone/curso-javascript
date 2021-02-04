// SPREAD OPERATOR (OPERADOR DE EXPANSIÓN)

    // const numbers = [-12,2,3,23,43,2,3];
    // console.log(...numbers);


// Enviar elementos en un array a una función

    // const addNumbers = (a, b, c) => {
    //     console.log(a + b + c);
    // }

    // addNumbers(1, 2, 3)

    // let numberToAdd = [1, 2, 3];
    // addNumbers(numberToAdd);
    // addNumbers(...numberToAdd);


// Añadir un array a otro array

    // let users = ['javier', 'david', ' rosa', 'juan', 'mercedes'];

    // let newUsers = ['marta', 'jaime', 'laura'];

    // users.push(newUsers[0], newUsers[1], newUsers[2]);
    // console.log(users);

    // users.push(...newUsers);
    // console.log(users);


// Copiar arrays

    // let arr1 = [1,2,3,4];
    // let arr2 = [...arr1];
    // console.log(arr2);


// Concatenar arrays

    // let arr1 = [1,2,3,4];
    // let arr2 = [6,7,8];
    // // let arrayConcat = arr1.concat(arr2);
    // let arrayConcat = [...arr1, ...arr2]
    // console.log(arrayConcat);


// Enviar un número indefinido de argumentos a una función (parámetros REST)

    // const restParams = (...numbers) => {
    //     console.log(numbers);
    //     console.log(numbers[3]);
    // }

    // restParams(1,2,3,4,5,6,7);


// Librería math

    // const numbers = [-12,2,3,23,43,2,3];
    // console.log(Math.max(...numbers));
    // console.log(Math.min(...numbers));
    

// Eliminar elementos duplicados

    // const numbers = [-12,2,3,23,43,2,3];
    // console.log([...new Set(numbers)]);