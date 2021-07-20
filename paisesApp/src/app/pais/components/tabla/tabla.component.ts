import { Component, Input, OnInit } from '@angular/core';
import { RESTCapitalResponse } from '../../interfaces/capital.interface';
import { RESTCountryResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  @Input()listaPaises?: RESTCountryResponse[] = [];
  @Input()listaCapitales?: RESTCapitalResponse[] = [];
  @Input()listaRegiones?: RESTCountryResponse[] = [];

  flagPais: boolean = false;
  flagCapital: boolean = false;
  flagRegion: boolean = false;

  listData:any = [];

  constructor() {
    
  }

  ngOnInit(): void {
    if(this.listaPaises!.length > 0){
      this.listData = this.listaPaises
      this.flagCapital = false;
      this.flagPais = true;
      this.flagRegion = false;
    }

    if(this.listaCapitales!.length > 0){
      this.listData = this.listaCapitales;
      this.flagCapital = true;
      this.flagPais = false;
      this.flagRegion = false;
    }

    if(this.listaRegiones!.length > 0){
      this.listData = this.listaRegiones;
      this.flagCapital = false;
      this.flagPais = false;
      this.flagRegion = true;
    }
  }

}
