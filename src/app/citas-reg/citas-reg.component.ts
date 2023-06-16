import { Component, OnInit } from '@angular/core';

import { ClientesService, Cliente } from '../clientes.service';
import Place from '../interfaces/place.interface';
import { PlacesService } from '../places.service';
import Place2 from '../interfaces/user.interface';

@Component({
  selector: 'app-citas-reg',
  templateUrl: './citas-reg.component.html',
  styleUrls: ['./citas-reg.component.css']
})
export class CitasRegComponent implements OnInit{

  places: Place[];
  places2: Place[];


  clientes!: Cliente[] | undefined;
  clieDes: any = localStorage.getItem("clieDes") || [];
  constructor(
    private placesService: PlacesService,
    private clientesService: ClientesService
    ) { 
      this.places = [{
        nombre: 'Hola Maestraaa c:',
        cif: 'Esto es una prueba',
        direccion: 'Action',
        fecha: '7/6/23',
        especial: 'Muchas gracias por todooo'
      }];

      this.places2 = [{
        nombre: 'Hola Maestraaa c:',
        cif: 'Esto es una prueba',
        direccion: 'Action',
        fecha: '6/16/23',
        especial: 'Muchas gracias por todooo'
      }];
    }

  ngOnInit() {
    
    this.clientes = this.clientesService.getClientes();
    if(this.clieDes.length > 0){
      this.clieDes = JSON.parse(this.clieDes);
    }

    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })

    this.placesService.getPlaces2().subscribe(places2 => {
      this.places2 = places2;
    })

  }

  
}
