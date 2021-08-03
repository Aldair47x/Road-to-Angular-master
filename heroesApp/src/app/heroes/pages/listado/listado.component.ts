import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor(private _heroesService: HeroesService) { }

  public heroesList: Heroes[] = [];

  ngOnInit(): void {
    this._heroesService.getHeroes().subscribe( resp => {
     this.heroesList = resp;
    })
  }

}
