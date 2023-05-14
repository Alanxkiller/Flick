import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

interface MarkerProperties {
  position: {
    lat: number;
    lng: number;
  }
};

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  apiLoaded: Observable<boolean>;

  menuopc!: string | null;

  constructor(private rutaActiva: ActivatedRoute, httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCPd2D-O7mbfA8B2x7n60X9rsXx3B2J0Bs', 'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false)),
    );
  }


  ngOnInit(){
    this.rutaActiva.paramMap.subscribe((params: ParamMap) => {
      this.menuopc = params.get('opcion');
    });
  }

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  center: google.maps.LatLngLiteral = {lat: 21.8802996, lng: -102.262368};
  zoom = 18;

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  markers: MarkerProperties[] = [
    { position: { lat: 21.8803200, lng: -102.262268 }} // Cinepolis espacio siuuu
  ];


}
