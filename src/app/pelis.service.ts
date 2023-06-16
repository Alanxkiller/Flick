import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PelisService {

  private url:string='http://api.themoviedb.org/3/discover/movie';
  private params=new HttpParams()
  .set('api_key','b07ac2dd1a2307809ead86871d129fd8')
  .set('page',5)
  .set('language','es-ES');

  private httpOptions={
    headers: new HttpHeaders({
      'Accept':'aplication/json',
    }),
    params:this.params
  };



constructor(private http:HttpClient) { }

async getAll():Promise<any>{
  console.log("Conexión de API exitosa");
  return new Promise(resolve=>{
    this.http.get(this.url, this.httpOptions).subscribe(data=>{
      resolve(data);
    })
    })

  }
}
