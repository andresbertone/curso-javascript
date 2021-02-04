class Persona {
    
    constructor (nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        this.datos = `Me llamo ${nombre} ${this.apellido} y tengo ${this.edad} años`;
    }

    saludar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`
    }
}

const andres = new Persona('Andres', 'Bertone', 23);

console.log(andres);
console.log(andres.saludar());