import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombreLower: string = 'aldair47x'
  nombreUpper: string = 'ALDAIR47X'
  nombreCompleto: string = 'aldair47x -'

  fecha: Date = new Date();

}
