import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buscar-hijo',
  template: `
    <div>
      <p>Estas Buscando la pelicula: <p>
      <h1>{{FuncionBusca}}</h1>
      <button class="btn btn-danger" (click)="borrarBusqueda()">Borrar</button>
    </div>
  `,
  styleUrls: ['./buscar-hijo.component.css']
})
export class BuscarHijoComponent {
    // Se recibe desde el padre. Ahora se puede utilizar en este componente
  // Cualquier cambio en esta variable en 'app-goku', se reflejará acá
  @Input() FuncionBusca:string | undefined;
  @Output () borrar: EventEmitter<string> = new EventEmitter();
  constructor() { }

  borrarBusqueda(){
    this.borrar.emit('')
  }
}