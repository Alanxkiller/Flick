import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, query, where, getCountFromServer} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import Place from './interfaces/place.interface';
import Place2 from './interfaces/user.interface';
import Place3 from './interfaces/user-phone.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }

  addPlace(place: Place) {
    const placeRef = collection(this.firestore, 'citas');
    return addDoc(placeRef, place);
  }

  addPlace2(place: Place) {
    const placeRef = collection(this.firestore, 'citasEspeciales');
    return addDoc(placeRef, place);
  }

  addUser(place: Place2) {
    const placeRef = collection(this.firestore, 'usuarios');
    return addDoc(placeRef, place);
  }

  addUserPhone(place: Place3) {
    const placeRef = collection(this.firestore, 'usuarios');
    return addDoc(placeRef, place);
  }


  getPlaces(): Observable<Place[]> {
    const placeRef = collection(this.firestore, 'citas');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Place[]>;
  }

  getPlaces2(): Observable<Place[]> {
    const placeRef = collection(this.firestore, 'citasEspeciales');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Place[]>;
  }

  getUsers(): Observable<Place2[]> {
    const placeRef = collection(this.firestore, 'usuarios');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Place2[]>;
  }


  deletePlace(place: Place) {
    const placeDocRef = doc(this.firestore, `citas/${place.id}`);
    return deleteDoc(placeDocRef);
  }

  async getPlacesCount(direccion: Place["direccion"]): Promise<number> {
    const placeRef = collection(this.firestore, 'citas');
    const q = query(placeRef, where("direccion", "==", direccion));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }

}