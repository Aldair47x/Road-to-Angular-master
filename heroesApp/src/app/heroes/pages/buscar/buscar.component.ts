import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  heroes: Heroes[] = [];
  stateCtrl = new FormControl();

  heroeSeleccionado : Heroes | undefined ;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heroesService.getSugerencias( this.termino )
    .subscribe( heroes => {
      this.heroes = heroes;
    })
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent) {

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroes = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId( heroe.id! )
    .subscribe( h => {
      this.heroeSeleccionado = h;
    })

  }

}
