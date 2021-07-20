import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { RESTCountryResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  paisName: string = ''
  flagError: boolean = false;
  flagWaiting: boolean = false;
  listaPaises: RESTCountryResponse[] = [];

  setPaisName = (newItem: string) => {
    
    if(newItem.trim().length > 0){
      this.paisName = newItem;
      this.buscar();
    }
  }

  buscar() {
    this.flagError = false;
    this.flagWaiting = true;
    
    if(this.paisName != ''){
      // console.log(this.termino);
      this.paisService.buscarPais(this.paisName)
      .subscribe((paises) => {
        this.flagWaiting = false;
        this.listaPaises = paises;
        console.log(paises);
      }, (err) => {
        this.flagWaiting = false;
        this.flagError = true;
        console.log('Error', err)
      })
    }

  }

}
