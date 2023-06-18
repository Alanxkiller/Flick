import { Component } from '@angular/core';
import { CorreoService } from '../correo.service';
import * as Notiflix from 'notiflix';


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
    Notiflix.Loading.standard('Espera poquito...') 
    this.correoService.sendEmail(this.name, this.email, this.message).subscribe(
      response => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success('El correo fue enviado correctamente, gracias por escribirnos');
        console.log('Email sent successfully!');
      },
      error => {
        Notiflix.Loading.remove();
        Notiflix.Notify.info('Hubo un error al enviar el correo :c');
        console.log('Error sending email:', error);
      }
    );
  }

  enviarCorreo(){      
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
