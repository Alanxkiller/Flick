import { Component } from '@angular/core';
import { CorreoService } from '../correo.service';


@Component({
  selector: 'app-contacto-f',
  templateUrl: './contacto-f.component.html',
  styleUrls: ['./contacto-f.component.css']
})
export class ContactoFComponent {

  name:string="";
  email:string="";
  message:string="";

  constructor(private correoService: CorreoService){}

  onSubmit(){
    this.correoService.sendEmail(this.name, this.email, this.message).subscribe(
      response => {
        console.log('Email sent successfully!');
      },
      error => {
        console.log('Error sending email:', error);
      }
    );
  }


}
