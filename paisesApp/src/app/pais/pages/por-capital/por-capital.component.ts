import { Component, OnInit } from '@angular/core';
import { RESTCapitalResponse } from '../../interfaces/capital.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  capitalName: string = ''
  flagError: boolean = false;
  flagWaiting: boolean = false;
  listaCapitales: RESTCapitalResponse[] = [];

  setcapitalName = (newItem: string) => {
    
    if(newItem.trim().length > 0){
      this.capitalName = newItem;
      this.buscar();
    }
  }

  buscar() {
    this.flagError = false;
    this.flagWaiting = true;
    
    if(this.capitalName != ''){
      console.log(this.capitalName);
      this.paisService.buscarCapital(this.capitalName)
      .subscribe((capitales) => {

        this.flagWaiting = false;
        this.listaCapitales = capitales;
        

      }, (err) => {

        this.flagWaiting = false;
        this.flagError = true;
        
      })
    }

  }

}
