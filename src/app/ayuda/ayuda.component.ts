import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';


@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {
  menuopc!: string | null;
  constructor(private rutaActiva: ActivatedRoute) {
  }
  ngOnInit(){
    this.rutaActiva.paramMap.subscribe((params: ParamMap) => {
      this.menuopc = params.get('opcion');
    });
  }
   
}
