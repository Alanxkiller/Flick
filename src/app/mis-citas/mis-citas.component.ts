import { Component } from '@angular/core';
import { ClientesService, Cliente } from '../clientes.service';

import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, query, where, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import Place from '../interfaces/place.interface';
import { PlacesService } from '../places.service';
import Place2 from '../interfaces/user.interface';

@Component({
  selector: 'app-mis-citas',
  templateUrl: './mis-citas.component.html',
  styleUrls: ['./mis-citas.component.css']
})
export class MisCitasComponent {

  citasUsuario: Place[];
  places: Place[];

  clientes!: Cliente[] | undefined;
  clieDes: any = localStorage.getItem("clieDes") || [];
  constructor(
    private placesService: PlacesService,
    private clientesService: ClientesService,
    private firestore: Firestore
  ) {
    this.places = [{
      nombre: 'Hola Maestraaa c:',
      cif: 'Esto es una prueba',
      direccion: 'Action',
      fecha: '7/6/23',
      especial: 'Muchas gracias por todooo'
    }];

    this.citasUsuario = [];
  }

  ngOnInit() {
    this.getUserPlaces();

    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })

    this.clientes = this.clientesService.getClientes();
    if (this.clieDes.length > 0) {
      this.clieDes = JSON.parse(this.clieDes);
    }

    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })


  }

  async getUserPlaces(): Promise<Place[]> {
    const placeRef = collection(this.firestore, 'citas');
    const q = query(placeRef, where("userUID", "==", localStorage.getItem("userUID")));
    //
    const querySnapshot = await getDocs(q);
    this.citasUsuario = [];
    querySnapshot.forEach((doc) => {
      this.citasUsuario.push({
        ...doc.data() as Place,
        id: doc.id
      });
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    console.log(this.citasUsuario);
    return this.citasUsuario;
  }

  async onClickDelete(place: Place) {
    const response = await this.placesService.deletePlace(place);
    console.log(response);
    await this.getUserPlaces();
  }

}
