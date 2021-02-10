/*
Crear un elemento: document.createElement(element)

Escribir texto en un elemento: element.textContent = texto

Escribir HTML en un elemento: element.innerHTML = códigoHTML

Añadir un elemento al DOM: <parent>.appendChild(element)

Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');

/*const itemList = document.createElement('LI');
itemList.textContent = 'Lunes' 

daysList.appendChild(itemList);
console.log(itemList) */


title.innerHTML = 'DOM - <span>Crear o insertar elementos</span>'


// for (const day of days) {
    //     daysList.innerHTML += `<li>${day}</li>`
    // } // Consume muchos recursos para la cargar la pág. NO SE RECOMIENDA


    
// LO RECOMENDADO ES HACER LO SIGUIENTE:

const fragment = document.createDocumentFragment();

    // PARA LA LISTA DESORDENADA
/*for (const day of days) {
    const itemList = document.createElement('LI');
    itemList.textContent = day
    fragment.appendChild(itemList);
}
daysList.appendChild(fragment);
console.log(fragment);*/

    // PARA EL SELECT
for (const day of days) {
    const selectItem = document.createElement('OPTION');
    selectItem.setAttribute('value', day.toLowerCase());
    selectItem.textContent = day;
    fragment.appendChild(selectItem);
}
selectDays.appendChild(fragment);