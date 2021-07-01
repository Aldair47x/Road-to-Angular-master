interface Pasajero {
    nombre: string;
    hijos?: string [];
}

const pasajero1: Pasajero = {
    nombre: "pepito"
}

const pasajero2: Pasajero = {
    nombre: "Perez",
    hijos: ['Yolo', 'Juan']
}

function imprimeHijos( pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero2);