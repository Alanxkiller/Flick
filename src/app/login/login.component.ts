import { useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuarios: any = localStorage.getItem("usuarios") || [];
  formulario: FormGroup;
  iniciada: boolean = false;
  menuopc!: string | null;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute){
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      contra: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.menuopc = params.get('opcion');
    });
  }

  iniciarSesion(): void{
    if(this.usuarios.length > 0){
      this.usuarios = JSON.parse(this.usuarios)

    }
    
    const usuario = {
      nombre: this.formulario.value.nombre,
      contra: this.formulario.value.contra
    }
    
    this.usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
    localStorage.setItem("usuarioActual", this.formulario.value.nombre)
    this.iniciada = true;
    
  }
}
