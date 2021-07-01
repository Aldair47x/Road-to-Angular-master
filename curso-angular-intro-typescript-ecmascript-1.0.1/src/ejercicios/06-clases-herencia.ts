class PersonaNormal {
    constructor (
        public nombre: string,
        public direccion: string
    ) {}
}


class Heroe extends PersonaNormal {
    
    constructor(
        public alterEgo: string,
        public nombreReal?: string,
        public edad: number = 10,
    ){
        super(nombreReal, 'NY, USA')
    }
}

const ironman = new Heroe("Joe", "Dongue");

console.log(ironman);