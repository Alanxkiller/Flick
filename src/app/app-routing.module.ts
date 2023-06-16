import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CatalogoComponent } from './catalago/catalago.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AboutComponent } from './about/about.component';
import { CitasRegComponent } from './citas-reg/citas-reg.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginPhoneComponent } from './login-phone/login-phone.component';

const routes: Routes = [
  { path: "", redirectTo: "/inicio", pathMatch: "full"},// Cuando es la raíz
  {
    path: 'inicio',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/inicio/register']))
  },
  { path: 'inicio/catalogo', component: CatalogoComponent },
  { path: 'inicio/buscar', component: BuscarComponent },
  { path: 'inicio/about', component: AboutComponent },
  { path: 'inicio/citas-registradas', component: CitasRegComponent },
  { path: 'inicio/register', component: RegisterComponent},
  { path: 'inicio/login-phone', component: LoginPhoneComponent},
  { path: 'inicio/:opcion', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
