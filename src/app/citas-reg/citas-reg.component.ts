import { Component, OnInit } from '@angular/core';
import { ClientesService, Cliente } from '../clientes.service';
import Place from '../interfaces/place.interface';
import { PlacesService } from '../places.service';
import Place2 from '../interfaces/user.interface';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, query, where, getDocs } from '@angular/fire/firestore';

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

      this.places2 = [];
    }

  ngOnInit() {
    this.getUserPlaces();

    this.clientes = this.clientesService.getClientes();
    if(this.clieDes.length > 0){
      this.clieDes = JSON.parse(this.clieDes);
    }

    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })

    /*this.placesService.getPlaces2().subscribe(places2 => {
      this.places2 = places2;
    })*/

  }

  async getUserPlaces(): Promise<Place[]> {
    const placeRef = collection(this.firestore, 'citas');
    const q = query(placeRef, where("especial", "==", "Si"));
    //
    const querySnapshot = await getDocs(q);
    this.places2 = [];
    querySnapshot.forEach((doc) => {
      this.places2.push({
        ...doc.data() as Place,
        id: doc.id
      });
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    console.log(this.places2);
    return this.places2;
  }

  
}
