import { Component, OnInit } from '@angular/core';

import { ClientesService, Cliente } from '../clientes.service';

@Component({
  selector: 'app-citas-reg',
  templateUrl: './citas-reg.component.html',
  styleUrls: ['./citas-reg.component.css']
})
export class CitasRegComponent implements OnInit{
  clientes!: Cliente[] | undefined;
  clieDes: any = localStorage.getItem("clieDes") || [];
  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
    if(this.clieDes.length > 0){
      this.clieDes = JSON.parse(this.clieDes);
    }
  }

  
}
