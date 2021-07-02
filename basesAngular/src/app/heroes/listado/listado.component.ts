import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  herosList: string[] = ['Spiderman', 'Ratman', 'CatMan', 'Batman']

  deletedList: string[] = []

  ngOnInit(): void {
  }

  borrarHeroe = (i: number):void => {
    let hero: string = this.herosList[i];
    this.herosList.splice(i,1);
    this.deletedList.push(hero);
    
  }

}
