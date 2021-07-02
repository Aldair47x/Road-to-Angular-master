import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombre: string = 'Ironman';
  edad: number = 45;

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }


  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNomber(): void {
    this.nombre = "Spiderman";
  }

  cambiarEdad(): void {
    this.edad = 50;
  }


}
