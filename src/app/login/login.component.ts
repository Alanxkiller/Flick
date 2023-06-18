import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as Notiflix from 'notiflix';
import { UserService } from 'src/app/user.service';


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

    if (this.usuarios == null){
      this.menuopc = 'No se encuentran usuarios actualmente';
    }
    else
    {
      this.menuopc = 'Hay usuarios registrados';
    }
    console.log(this.menuopc);
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
    console.log(this.formulario.value);
    this.userService.login(this.formulario.value)
      .then(response => {
        console.log(response);
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Haz iniciado sesion, ¡bienvenido!');
        this.router.navigate(['/inicio']);
      })
      .catch(error => {
        console.log(error);
        Notiflix.Loading.remove();
        Notiflix.Notify.warning('Haz ingresado mal tu usuario o tu contraseña');
      })
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(error => console.log(error))
  }
  
}
