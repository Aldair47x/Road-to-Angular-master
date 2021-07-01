interface Geometria {
    lados: number
}

interface Triangulo extends Geometria {
    base: number
    altura: number
}

interface Cuadrado extends Geometria {
    lado: number
}

function procesar( g: Geometria){
    if(g.lados == 4){

        let cuadrado = g as Cuadrado
        cuadrado.lado
        console.log(cuadrado)

    } else if (g.lados == 3 ){

        let triangulo = g as Triangulo
        triangulo.altura
        console.log(triangulo)
    }
}


const miFigura: Cuadrado = {
    lados: 4,
    lado: 1
}


procesar(miFigura);