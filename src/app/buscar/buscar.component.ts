import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-buscar',
  template: `
  <div class="container">
      <div class="row">
        <div class="col-sm-8 offset-sm-2">
            <h1 class="mx-4">Buscar Component</h1>
            <input 
              class="mx-2 form-control"
              #buscarInput
              (keyup)="keyUp(buscarInput.value)">
            <div class="col-sm-12">
              <app-buscar-hijo [FuncionBusca]="FuncionBuscaG"></app-buscar-hijo>
            </div>
        </div>
          
      </div>
    </div>
  `,
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  peliculas = [
    { nombre: 'Guardianes Vol. 3', imagen: './assets/img/guardianes.jpg', descripcion: 'Peter Quill, que sigue conmocionado por la pérdida de Gamora, debe reunir a su equipo y emprender una peligrosa misión para salvar la vida de Rocke'},
    { nombre: 'Super Mario Bros', imagen: './assets/img/mario2.webp', descripcion: 'Un fontanero llamado Mario viaja por un laberinto subterráneo con su hermano, Luigi, intentando salvar a una princesa capturada.'},
    { nombre: 'John Wick 3 Remaster', imagen: './assets/img/john.jpg', descripcion: 'John Wick regresa de nuevo pero con una recompensa sobre su cabeza que persigue unos mercenarios. ' },
    { nombre: 'Oppenheimer', imagen: './assets/img/oppen.jpg', descripcion: 'El físico J Robert Oppenheimer trabaja con un equipo de científicos durante el Proyecto Manhattan, que condujo al desarrollo de la bomba atómica.' },
    { nombre: 'Barbie', imagen: './assets/img/barbie.jpg', descripcion: 'Después de ser expulsada de Barbieland por no ser una muñeca de aspecto perfecto, Barbie parte hacia el mundo humano para encontrar la verdadera felicidad.'},
    { nombre: 'Exorcista del Papa', imagen: './assets/img/exorcista.jpg', descripcion: 'El exorcista líder del Vaticano investiga la posesión de un niño y descubre una conspiración vaticana.'},
    { nombre: 'Evil Dead Rise', imagen: './assets/img/evil.jpg', descripcion: 'En un edificio de apartamentos de Los Ángeles, dos hermanas luchan contra los demonios sedientos de sangre que han salido de un libro antiguo.'},
    { nombre: 'The Flash', imagen: './assets/img/flash.webp', descripcion: 'Flash viaja a través del tiempo para evitar el asesinato de su madre, pero sin saberlo provoca cambios que resultan en la creación de un multiverso.'},
  ];
  
  query: string = '';
  resultados: any[] = [];
  busquedaRealizada = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let opcion = params.get('opcion');
      console.log(opcion);
    });
  }

  buscar() {
    this.resultados = this.peliculas.filter(pelicula =>
      pelicula.nombre.toLowerCase().includes(this.query.toLowerCase())
    );
    this.busquedaRealizada = true;
  }

  // Se declara e inicia en el componente padre para luego comunicarlo al componente hijo
  FuncionBuscaG: string = '';

  // con cada tecla apretada se activa esta funcion.
  keyUp(letra: string) {
    this.FuncionBuscaG = letra;
  }
  inicio!: {navbuscar: string};

  borrarTexto(mensaje: any){
    this.query = mensaje;
    this.FuncionBuscaG = mensaje;
  }
}
