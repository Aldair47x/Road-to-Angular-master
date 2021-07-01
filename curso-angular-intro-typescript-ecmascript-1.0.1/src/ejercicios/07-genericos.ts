const queTipoSoy = <T>( argumento: T) =>  {
    return argumento;
}

let soyString = queTipoSoy( 'Hola mundo' );
let soyNumero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1,2,3,4,5] );
let soyExplicito = queTipoSoy<number>( 100 );


interface Respuesta<T> {
    type: string,
    success: boolean,
    message: T
}


let payload: Respuesta <string> = {
    type: 'post',
    success: true,
    message: 'asdfsdfa'
}

let payload2: Respuesta <boolean> = {
    type: 'error',
    success: true,
    message: 'asdfsdfa'
}

interface RespuestaDoble <T, X> {
    type: string,
    success: boolean,
    message: T,
    receptor: X
}

let payload3: RespuestaDoble <string, number> = {
    type: 'post',
    success: true,
    message: 'asdfsdfa',
    receptor: "hola"
}

let payload4: RespuestaDoble <string, number> = {
    type: 'error',
    success: true,
    message: 'asdfsdfa',
    receptor: 23423
}