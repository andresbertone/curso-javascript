/*
    document.getElementById('id') - Acceder a un elemento a traves de su id

    document | element.querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

    document | element.querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

const title = document.getElementById('title');
console.dir(title);
console.log(title);

title.textContent = 'DOM - Accediendo a nodos'; // Modifica el contenido del HTML. Modifica el título en este caso

const paragraph = document.querySelector('.paragraph:nth-child(1)'); // Va el punto porque es una clase
console.dir(paragraph);
console.log(paragraph);

const span = paragraph.querySelector('span');
console.dir(span.textContent);

const paragraphs = document.querySelectorAll('.paragraph');
console.dir(paragraphs);

const paragraphsSpread = [...document.querySelectorAll('.paragraph')];

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph')); // Más recomendado para convertir a array

// paragraphs[0].style.color = 'red';

// paragraphs.map(p => p.style.color = 'green'); // Tira error porque no es un array, es un nodeList

// paragraphsSpread.map(p => p.style.color = 'green');

paragraphsArray.map(p => p.style.color = 'green');