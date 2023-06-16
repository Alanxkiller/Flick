import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  menuopc!: string | null;

  constructor(private rutaActiva: ActivatedRoute, httpClient: HttpClient) {
  }


  ngOnInit(){
    this.rutaActiva.paramMap.subscribe((params: ParamMap) => {
      this.menuopc = params.get('opcion');
    });
  }

}
