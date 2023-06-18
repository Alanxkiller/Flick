import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIcon, MatIconModule} from '@angular/material/icon';

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
import { ContactoFComponent } from './contacto-f/contacto-f.component';
import { QRComponent } from './qr/qr.component';
import { QRCodeModule } from 'angularx-qrcode';
import { MisCitasComponent } from './mis-citas/mis-citas.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    CatalogoComponent,
    AboutComponent,
    BuscarComponent,
    CitasRegComponent,
    LoginComponent,
    BuscarHijoComponent,
    RegisterComponent,
    LoginPhoneComponent,
    ContactoFComponent,
    QRComponent,
    MisCitasComponent,
    BarChartComponent,
    LineChartComponent,
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
    QRCodeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  exports: [
    CommonModule,
    MatBadgeModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
