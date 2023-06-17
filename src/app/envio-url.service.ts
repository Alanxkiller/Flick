import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from './urls.interface'

@Injectable({
  providedIn: 'root'
})
export class EnvioUrlService {
  private obtenerVideoUrl = 'http://localhost:3000/obtenerVideo'; // Replace with your backend URL
  constructor(private http: HttpClient) { }

  obtenerVideo(): Observable<Urls> {
    return this.http.get<Urls>(this.obtenerVideoUrl);
  }
}
