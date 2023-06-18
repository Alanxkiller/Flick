import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  private emailUrl = 'https://flickbackend.onrender.com/envio'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, message: string) {
    const data = {
      name: name,
      email: email,
      message: message
    };
    return this.http.post(this.emailUrl, data);
  }

 
}