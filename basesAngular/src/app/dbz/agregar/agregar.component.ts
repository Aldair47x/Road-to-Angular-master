import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onEnviarNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar = () => {
    if( this.nuevo.nombre.trim().length === 0 ){
      return;
    }

    this.onEnviarNuevoPersonaje.emit( this.nuevo )


    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
