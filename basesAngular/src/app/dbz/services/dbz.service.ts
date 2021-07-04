import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

    constructor( ) {
        console.log('Servicio inicializado');
    }

    personajes: Personaje[] = [{
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'Vegueta',
        poder: 8500
      },
      {
        nombre: 'Cell',
        poder: 14000
      },
    ]

}