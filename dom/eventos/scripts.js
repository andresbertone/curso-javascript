// ANGULAR

// <p (click)="saludo()">Soy un párrafo</p> Esto iría en el HTML

// --------------------------

// Element.addEventListener('event', callback);

/*
    Eventos de mouse:
        click - Cuando pulsamos el botón izquierdo del mouse
        dblclick - Cuando hacemos doble click izquierdo
        mouseenter - cuando entramos en la zona que tiene el evento
        mouseleave - cuando salimos de la zona que tiene el evento
        mousedown - cuando pulsamos el boton izquierdo del mouse
        mouseup - cuando soltamos el botón izquierdo del mouse
        mousemove - cuando movemos el mouse

    Eventos de teclado:
        keydown - cuando pulsamos una tecla
        keyup - cuando soltamos una tecla
        keypress - cuando pulsamos una tecla y no la soltamos  
*/

const button = document.getElementById('button');
const input = document.getElementById('input');
const box = document.getElementById('box');

// button.addEventListener('click', () => {
//     console.log('click');
// });

// button.addEventListener('dblclick', () => {
//     console.log('DOBLE CLICK');
// });

/* box.addEventListener('mouseenter', () => {
    box.style.background = "green";
});

box.addEventListener('mouseleave', () => {
    box.style.background = "red";
}); 

// No se recomienda hacerlo con el .style.background

// Se tiene que hacer de la siguiente manera. Además hay que agregar la clase red y green en el archivo de css*/

// box.addEventListener('mouseenter', () => {
//     box.classList.replace('red','green');
// });

// box.addEventListener('mouseleave', () => {
//     box.classList.replace('green', 'red')
// });

// box.addEventListener('mousedown', () => {
//     console.log('Has pulsado en la caja');
// });
// box.addEventListener('mouseup', () => {
//     console.log('Has soltado el botón izquierdo en la caja');
// });

// box.addEventListener('mousemove', () => {
//     console.log('Estas moviendo el mouse en la caja')
// });


// input.addEventListener('keydown', () => {
//     console.log('Has pulsado una tecla')
// });
// input.addEventListener('keyup', () => {
//     console.log('Has soltado una tecla')
// });
// input.addEventListener('keypress', () => {
//     console.log('Estas pulsando una tecla')
// });