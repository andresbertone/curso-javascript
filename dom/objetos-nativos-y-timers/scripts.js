const button = document.getElementById('button')

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

// alert('Hola');

// prompt('Escriba su nombre');

// if (confirm('Acepta?')) {
//     console.log('El usuario aceptó')
// } else {
//     console.log('El usuario no aceptó')
// }


/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

const person = {
    name: 'Dorian',
    age: 30,
    email: 'dorian@gmail.com'
}

// console.log(button);
// console.dir(button);
// console.error('F');
// console.table(person);


/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/

// console.log(location.href);
// location.href = 'https://google.com';
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.hash);
// location.reload();


/* Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
    
    .back()
    .forward()
    .go(n|-n)
    .length

    Para ir hacia delante o hacia atrás. Cumple la función de las flechitas arriba de las páginas
*/



/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

// const date = new Date();

// console.log(date.getDay()); // empieza a contar desde 0. El 0 es domingo y el 6 es sábado

// console.log(date);
// console.log(date.getDate());


/*
Timers
    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    
    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)
    
    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    
    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

// button.addEventListener('click', () => {
//     // setTimeout(saludar, 3000); // Si la función es externa
//     setTimeout(() => {
//         console.log('ADIOS')
//     }, 3000) // Si el cuerpo de la función está dentro
// })

const saludar = () => {
    console.log('Hola')
}


/* button.addEventListener('click', () => {
    const timeout = setTimeout(() => {
        console.log('ADIOS');
    }, 3000)
    
    clearTimeout(timeout)
}) */



// button.addEventListener('click', () => {  
//     clearTimeout(timeout);
// })

// const timeout = setTimeout(() => {
//     console.log('ADIOS')
// }, 3000)


// const interval = setInterval(saludar, 3000);



let cont = 0;

// setInterval(() => {
//     console.log(cont);
//     cont ++
// }, 1000)


const interval = setInterval(() => {
    console.log(cont);
    cont ++
}, 1000)

button.addEventListener('click', () => {  
    clearTimeout(interval);
})