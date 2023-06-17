import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { GraficaComponent } from './grafica/grafica.component';
import { Chart } from 'chart.js';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogoComponent } from './catalago/catalago.component';
import { AboutComponent } from './about/about.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CitasRegComponent } from './citas-reg/citas-reg.component';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BuscarHijoComponent } from './buscar-hijo/buscar-hijo.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { RegisterComponent } from './register/register.component';
import { LoginPhoneComponent } from './login-phone/login-phone.component';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LetrasMayusculasPipe } from './letras-mayusculas.pipe';
import { LetrasMinusculasPipe } from './letras-minusculas.pipe';
import { NumerosLetrasPipe } from './numeros-letras.pipe'; 



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    CatalogoComponent,
    GraficaComponent,
    AboutComponent,
    BuscarComponent,
    CitasRegComponent,
    LoginComponent,
    BuscarHijoComponent,
    RegisterComponent,
    LoginPhoneComponent,
    LetrasMayusculasPipe,
    LetrasMinusculasPipe,
    NumerosLetrasPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    AppRoutingModule,
    CommonModule,
    MatBadgeModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  exports: [
    CommonModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  providers: [{ provide: 'Chart', useValue: Chart }],
  bootstrap: [AppComponent]
})
export class AppModule { }
