import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public title :string = 'Contador app';
  public contador: number = 0;



  aumentarValor = () => {
    this.contador += 1;
  }

  restarValor = () => {
    this.contador -= 1;
  }

  reiniciar = () => {
    this.contador = 0;
  }

}
