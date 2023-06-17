import { Component, OnInit } from '@angular/core';
import { ClientesService, Cliente, Grupo } from '../clientes.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Modal } from 'bootstrap';
import { PlacesService } from '../places.service';

const OPCIONES_ESPECIAL = {
  SI: 'Si',
  NO: 'No'
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  // Variables de Mensaje
  mensaje: string = "";
  clieDes: any = localStorage.getItem("clieDes") || [];

  // Variables de servicio
  cliente!: Cliente;
  registro = false;
  grupos!: Grupo[];

  // Formulario
  formulario: FormGroup;
  nombreUsr: string = localStorage.getItem("usuarioActual") || "";


  // Variables confirmación fecha
  libre: boolean = true;
  click: boolean = false;
  nuevaFecha: string = '';
  listaDeFechass: any = localStorage.getItem("fechasOcupadas") || [];
  listaDeFechas: any = JSON.parse(localStorage.getItem("fechasOcupadas") || '[]' ) || [];

  // Posters para la sección grid
  posters: any = [
    {
      img: '../../assets/img/guardianes.jpg',
      titulo: 'Guardianes Vol. 3',
      pagar: 'Comprar',
    },
    {
      img: '../../assets/img/mario2.webp',
      titulo: 'Super Mario Bros',
      pagar: 'Comprar',
    },
    {
      img: '../../assets/img/john.jpg',
      titulo: 'John Wick 3 Remaster',
      pagar: 'Comprar',
    },
    {
      img: '../../assets/img/oppen.webp',
      titulo: 'Oppenheimer',
      pagar: 'Reservar',
    },
    { img: '../../assets/img/barbie.jpg', titulo: 'Barbie', pagar: 'Reservar' },
    {
      img: '../../assets/img/exorcista.jpg',
      titulo: 'Exorcista del Papa',
      pagar: 'Comprar',
    },
    {
      img: '../../assets/img/evil.jpg',
      titulo: 'Evil Dead Rise',
      pagar: 'Comprar',
    },
    {
      img: '../../assets/img/flash.webp',
      titulo: 'The Flash',
      pagar: 'Reservar',
    },
  ];

  // Constructor Servicio y validación formulario
  constructor(
    private clientesService: ClientesService,
    private formBuilder: FormBuilder,
    private placesService: PlacesService
  ) {
    this.formulario = this.formBuilder.group({
      nombre: [this.nombreUsr, [Validators.required, Validators.minLength(3)]],
      cif: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
      direccion: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.registro = false;
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
    localStorage.setItem("usuarioActual", "");
  }

  checkDate($event: any) {
    $event.preventDefault();
  }

  // Verificar fecha
  onCheckDate(fecha: any): boolean {
    this.libre = true;

    if (fecha === '') {
      this.click = false;
    } else {
      this.click = true;
    }

    let fechasOcupadas = localStorage.getItem('fechasOcupadas') || [];
    if (typeof fechasOcupadas === 'string') {
      let fechasArray = JSON.parse(fechasOcupadas);
      console.log(fechasArray);

      if (fechasArray != undefined) {
        for (let i = 0; i < fechasArray.length; i++) {
          if (fecha == fechasArray[i].fecha) {
            this.libre = false;
            console.log(this.libre);
            return this.libre;
          }
        }
      }
    }
    this.nuevaFecha = fecha;
    console.log(this.nuevaFecha);

    return this.libre;
  }

  async nuevoCliente(): Promise<void> {

    console.log(this.formulario.value)
    console.log(this.nuevaFecha);

    if (this.nuevaFecha === "" || this.libre == false || this.click == false) {
      this.dateModal();

    } else {

      let fechaRegistrada = {
        fecha: this.nuevaFecha
      }
      console.log(fechaRegistrada);


      this.listaDeFechas.push(fechaRegistrada);
      localStorage.setItem("fechasOcupadas", JSON.stringify(this.listaDeFechas));

      if (this.formulario?.valid) {
        if (this.formulario.value.cif > 4) {

          if (this.clieDes.length > 0) {
            this.clieDes = JSON.parse(this.clieDes);
          }

          const clienteEspecial = {
            nombre: this.formulario.value.nombre,
            cif: this.formulario.value.cif,
            direccion: this.formulario.value.direccion,
            fecha: this.nuevaFecha
          }

          this.clieDes.push(clienteEspecial);

          const fechaForm = {
             ...this.formulario.value, 
             fecha: this.nuevaFecha, 
             especial: OPCIONES_ESPECIAL.SI,
             userUID: localStorage.getItem("userUID")
            };

          const response = await this.placesService.addPlace(fechaForm);
          const response2 = await this.placesService.addPlace2(fechaForm);

          localStorage.setItem("clieDes", JSON.stringify(this.clieDes));
          this.mensaje = `Felicidades. Por su compra de ${this.formulario.value.cif} boletos. Usted tendrá un descuento especial (Puede consulitarlo en la tabla de fechas registradas)`;
        } else {
          const fechaForm = { 
            ...this.formulario.value, 
            fecha: this.nuevaFecha, 
            especial: OPCIONES_ESPECIAL.NO,
            userUID: localStorage.getItem("userUID") 
          };
          
          const response = await this.placesService.addPlace(fechaForm);
        }
        const cliente: Cliente = {
          id: this.clientesService.getClientes()?.length,
          nombre: this.formulario.value.nombre,
          cif: this.formulario.value.cif,
          direccion: this.formulario.value.direccion,
          fecha: this.nuevaFecha
        };
        this.clientesService.agregarCliente(cliente);
        this.registro = true;

        this.openFinalModal();

      }
    }

  }

  dateModal(): void {
    const fechaModalElemento = document.getElementById("fechaModal") as HTMLElement;
    const fechaModal = new Modal(fechaModalElemento);
    fechaModal.show()
  }

  openFinalModal(): void {
    const finalModalElemento = document.getElementById("modalFinal") as HTMLElement;
    const finalModal = new Modal(finalModalElemento);
    finalModal.show()
  }

}
