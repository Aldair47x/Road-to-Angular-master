import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) {
    
  }

  ngOnInit(): void {
    
  }

  get sidebarElements() {
    return this.gifsService.historial;
  }

  buscar = ( item: string ) => {
    this.gifsService.buscarGifs( item );
  }

  

}
