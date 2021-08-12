import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string,
  nombre: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuItems: MenuItem[] = [
    {
      ruta: '/mapas/fullscreen',
      nombre: 'FullScreen'
    },
    {
      ruta: '/mapas/zoom-range',
      nombre: 'ZoomRange'
    },
    {
      ruta: '/mapas/marcadores',
      nombre: 'Marcadores'
    }
  ]

}
