import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss']
})
export class NumerosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ventasNetas: number = 2334234.3422;
  porcentaje: number = 0.47;



}
