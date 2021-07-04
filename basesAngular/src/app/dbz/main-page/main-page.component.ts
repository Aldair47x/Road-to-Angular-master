import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private dbzService: DbzService) {
    this.personajes = this.dbzService.personajes;
    
  }

  ngOnInit(): void {
  }

  personajes: Personaje[] = [];



  agregarNuevoPersonaje = ( e:Personaje ) => {
    console.log(e);
    this.personajes.push(e);
  }






}
