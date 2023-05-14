import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  usuarios: any = localStorage.getItem("usuarios") || [];
  opcion!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.opcion = params.get('opcion');
    });

    if (this.usuarios == null){
      this.opcion = 'No se encuentran usuarios actualmente';
    }
    else
    {
      this.opcion = 'Hay usuarios registrados';
    }
    console.log(this.opcion);
  }
  
}
