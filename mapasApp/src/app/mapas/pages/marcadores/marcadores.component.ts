import { AfterViewInit, ElementRef, OnDestroy, ViewChild, Component} from '@angular/core';
import * as  mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string,
  marker: mapboxgl.Marker
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.scss']
})
export class MarcadoresComponent implements AfterViewInit, OnDestroy{

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 16;
  center: [number, number] = [-75.67576759219597, 4.810776314028156];

  marcadores: MarcadorColor[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    const marker1 = new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.mapa);

  }
  ngOnDestroy(): void {
    
  }

  irMarcador( marker: mapboxgl.Marker ){
    this.mapa.flyTo({
      center: marker.getLngLat()
    });
  }

  agregarMarcador(){

    if(this.marcadores.length < 5){
      const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

      const newMarker = new mapboxgl.Marker({
        draggable: true,
        color
      })
      .setLngLat(this.center)
      .addTo(this.mapa);


      this.marcadores.push({
        color,
        marker: newMarker
      });

    }

  }

  saveLocalStorage() {
    
  }


}
