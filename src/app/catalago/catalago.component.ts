import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { PelisService } from '../pelis.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalago.component.html',
  styleUrls: ['./catalago.component.css'],
})
export class CatalogoComponent implements OnInit {
  pelis: any;

  pregunta = '';
  respuesta: number = 0;
  contador() {
    this.respuesta = this.respuesta + 1;
  }

  menuopc!: string | null;

  constructor(private route: ActivatedRoute, private pelisServicio: PelisService) {}

  movies: any = [];

  mostrarAlert = true;

  cerrarAlert() {
    this.mostrarAlert = false;
  }

  peliculas: any=[
    {
      nombre: "John Wick 3",
      genero: "Accion",
      actor: "Keanu Reeves",
      duracion: "120 minutos",
      image: "../assets/img/john.jpg"
    },

    {
      nombre: "Exorcista del Papa",
      genero: "Terror",
      actor: "Russell Crowe",
      duracion: "110 minutos",
      image: "../assets/img/exorcista.jpg"
    },

    {
      nombre: "Flash",
      genero: "Aventuras",
      actor: "Ezra Miller",
      duracion: "140 minutos",
      image: "../assets/img/flash.webp"
    },

    {
      nombre: "Barbie",
      genero: "Aventuras",
      actor: "Margot Robbie",
      duracion: "105 minutos",
      image: "../assets/img/barbie.jpg"
    },

    {
      nombre: "Evil dead rise",
      genero: "Terror",
      actor: "Alyssa Sutherland",
      duracion: "125 minutos",
      image: "../assets/img/evil.jpg"
    },

    {
      nombre: "Guardianes de la galaxia",
      genero: "Accion",
      actor: "Chirs Pratt",
      duracion: "130 minutos",
      image: "../assets/img/guardianes.jpg"
    }
  ];

  async ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.menuopc = params.get('opcion');
    });

    this.pelis=await this.pelisServicio.getAll();
  }
}
