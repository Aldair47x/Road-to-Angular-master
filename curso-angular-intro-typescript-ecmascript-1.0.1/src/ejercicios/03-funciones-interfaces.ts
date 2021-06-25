const sumarFlecha = (a:number, b:number):number => {
    return a + b;
} 

const multiplicar = (numero:number, otroNumero?: number, base:number = 2): number => {
    return numero * base;
}

const resultado = multiplicar(5, 10);


interface PersonajeLOR {
    nombre: string;
    pv: number;
}

const curar = (personaje: PersonajeLOR, curarX): void => {
    personaje.pv += curarX;
    console.log(personaje)
}

const nuevoPersonaje: PersonajeLOR = {

    nombre: 'Strider',
    pv: 50
}

curar(nuevoPersonaje, 20);