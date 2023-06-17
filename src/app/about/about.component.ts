import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  menuopc!: string | null;

  constructor(private rutaActiva: ActivatedRoute) {
  }


  ngOnInit(){
    this.rutaActiva.paramMap.subscribe((params: ParamMap) => {
      this.menuopc = params.get('opcion');
    });
  }

}
