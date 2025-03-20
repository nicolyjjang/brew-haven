import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: any;

  ngOnInit() {
    this.initMap();
  }

  initMap() {
  
    const center: L.LatLngExpression = [-14.8646, -40.8369];

    this.map = L.map('map').setView(center, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const locations = [
      { lat: -14.8646, lng: -40.8369, title: 'Loja 1 - Praça Tancredo Neves' },
      { lat: -14.8765, lng: -40.8376, title: 'Loja 2 - Shopping Conquista Sul' },
      { lat: -14.8512, lng: -40.8371, title: 'Loja 3 - UESB' },
      { lat: -14.8801, lng: -40.8273, title: 'Loja 4 - Parque da Lagoa' }
    ];

    const customIcon = L.icon({
      iconUrl: 'assets/images/logo.png',
      iconSize: [24, 24],
      iconAnchor: [16, 32],
      popupAnchor: [0, 32]
    });

    locations.forEach(location => {
      L.marker([location.lat, location.lng], {
        title: location.title,
        icon: customIcon
      }).addTo(this.map);
    });
  }
}