import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  usuarios: any = localStorage.getItem("usuarios") || [];
  
  formulario: FormGroup;

  iniciada: boolean = false;
  menuopc!: string | null;

  constructor(
    private formBuilder: FormBuilder, private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
    ){
    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
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
      email: this.formulario.value.email,
      password: this.formulario.value.password
    }
    
    this.usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
    localStorage.setItem("usuarioActual", this.formulario.value.email)
    this.iniciada = true;
    
  }

   onSubmit() {
    Notiflix.Loading.standard('Espera poquito...')
    this.userService.register(this.formulario.value)
      .then(response => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Te haz registrado exitosamente, ¡bienvenido!');
        console.log(response);
        this.iniciada = true;
        this.router.navigate(['/inicio']);
      })
      .catch(error => {
        console.log(error);
        Notiflix.Loading.remove();
        Notiflix.Notify.failure('Hubo un problema con el registro');
      });
  }

}
