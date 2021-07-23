import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mayusFlag: boolean = false;

  cambiarMayusculas = () => {
    if(this.mayusFlag){
      this.mayusFlag = false;
    } else {
      this.mayusFlag = true;
    }
  }

}
