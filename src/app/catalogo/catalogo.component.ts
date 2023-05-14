import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  inicio!: {navcatalogo: string};


  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    this.inicio = {
      navcatalogo: this.rutaActiva.snapshot.params['navcatalogo'],
    };
    this.rutaActiva.params.subscribe(
    (params: Params) => {
    this.inicio['navcatalogo'] = params['navcatalogo'];
    }
    );
   
    }
   
}
