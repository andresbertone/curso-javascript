// window.addEventListener('click', (e) => {
//     console.log(e);
// });


const form = document.getElementById('form');
const input = document.getElementById('input');
const button = document.getElementById('button');

// input.addEventListener('keyup', (e) => {
//     console.log(e);
//     console.log(e.key);
//     console.log(e.target.attributes[0]);
// });

// button.addEventListener('click', (e) => {
//     console.log(e.target);
//     console.dir(e.target);
// })


// const gallery = document.getElementById('gallery');

// gallery.addEventListener('click', (e) => {
//     console.log(e.target.textContent);
// })
// gallery.addEventListener('click', (e) => {
//     e.target.classList.add('red');
// })

const link = document.getElementById('link');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que haga el evento que tiene como default (en este caso enviar el formulario)
    console.log('El formulario se ha enviado');
});

button.addEventListener('click', () => {
    input.value = 'Has hecho click';
});


link.addEventListener('click', (e) => {
    e.preventDefault();
    button.click();  // Está forzando a que suceda el evento (en este caso que se escriba 'Has hecho click')
});