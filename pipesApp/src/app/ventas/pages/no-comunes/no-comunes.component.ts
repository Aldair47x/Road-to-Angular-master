import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string = "Aldair47x";
  genero: string = 'masculino';
  invitacicionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // KeyValue Pipe

  persona = {
    nombre: 'Aldair47x',
    edad: 35,
    direccion: "Pereira city"
  }

  // Json pipe

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Flash',
      vuela: false
    }
  ]

  //i18nPlural
  clientes: string[] = ['Pepito', 'Pepita', 'Juan', 'Pedro', 'Aldacho', "YoloZuan"];

  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando'
  }

  // Async Pipe

  miObservable = interval(1000);


  cambiarPersona = () => {
    if(this.genero == 'masculino'){
      this.genero = 'femenino';
      this.nombre = 'Kira'
    } else {
      this.genero = 'masculino';
      this.nombre = 'Aldair47x'
    }
  }

  borrarPersona = () => {
    this.clientes.pop();
  }
 

}
