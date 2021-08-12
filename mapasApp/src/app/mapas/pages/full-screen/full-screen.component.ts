import { Component, OnInit } from '@angular/core';
import * as  mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.67576759219597, 4.810776314028156],
      zoom: 16
    });

  }

}
