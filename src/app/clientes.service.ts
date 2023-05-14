import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private clientes: Cliente[] | undefined;
  private grupos: Grupo[] = [
    {
      id: 0,
      nombre: 'Sin definir',
    },
    {
      id: 1,
      nombre: 'Activos',
    },
    {
      id: 2,
      nombre: 'Inactivos',
    },
    {
      id: 3,
      nombre: 'Deudores',
    },
  ];

  constructor() {
    this.clientes = JSON.parse(localStorage.getItem('data') || '[]');
  }

  getGrupos(){
    return this.grupos;
  }

  getClientes(){
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes?.push(cliente);
    localStorage.setItem('data', JSON.stringify(this.clientes));
  }

  nuevoCliente(): Cliente {
    if(this.clientes !== undefined){
      return {
        id: this.clientes?.length,
        nombre: '',
        cif: '',
        direccion: '',
        fecha: ''
      };
    }
    return {id: 0, nombre: '', cif: '', direccion: '', fecha: ''};
  }
}

export interface Cliente {
  id: any;
  nombre: string;
  cif: string;
  direccion: string;
  fecha: string
}

export interface Grupo {
  id: number;
  nombre: string;
}
