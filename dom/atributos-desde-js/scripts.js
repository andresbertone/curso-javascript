/*
    Atributos:
        element.getAttribute('attribute')
        element.setAttribute('attribute', value)

    Clases
        element.classList.add('class', 'class', ...)
        element.classList.remove('class', 'class', ...)
        element.classList.toggle('class' [, force])
        element.classList.contains('class')
        element.classList.replace('oldClass', 'newClass')

    Atributos directos
        id
        value
*/

const title = document.getElementById('title');
const name = document.getElementById('name');


// console.log(name.getAttribute('type'));
// name.setAttribute('type', 'number');

// title.classList.add('main-title');
// title.classList.add('main-title', 'other-title');
// title.classList.remove('main-title');

// if (title.classList.contains('main-title')) {
//     console.log('Title tiene la clase main-title')
// } else console.log('Title no tiene la clase main-title')

// title.classList.replace('title', 'main-title');


// console.log(title);
// console.log(name);
// console.dir(title);
// console.dir(name);

// console.log(title.innerHTML); // Imprime tmb las etiquetas
// console.log(title.textContent); // Imprime solo texto

console.log(name.value); // IMPORTANTE PARA VALIDAR FORMULARIOS
console.log(name.value.length);