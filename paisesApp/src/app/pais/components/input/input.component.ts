import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  termino: string = "";

  @Output()query = new EventEmitter<string>();

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  sendTermino = ():void => {
    console.log(this.termino);
    this.query.emit(this.termino);
  }

}
