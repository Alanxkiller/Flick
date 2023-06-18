import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Auth, getAuth, onAuthStateChanged } from '@angular/fire/auth';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  email: any;
  admin: any;
  isLogged: any;
  authU = getAuth();
  usuarios: any = localStorage.getItem('usuarios') || [];
  opcion!: string | null;

  // Variables de lectura en voz alta

  text: string = '';
  synth = speechSynthesis;
  utter: any;
  myPause: boolean = false;

  // Variables de modo oscuro
  dark: boolean = false;
  @ViewChild('darkModeBtn') darkModeBtn: ElementRef<any> = {} as ElementRef;
  // Variables de Fuente (Tamaño)
  fontSize: number = 16;
  elements: NodeList = window.document.querySelectorAll('*') as NodeList;
  // Variables de filtro
  activado: boolean = false;
  @ViewChild('blueFilt') blueFiltBtn: ElementRef<any> = {} as ElementRef;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private auth: Auth
  ) {}

  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const userEmail = user.email;
        const userUID = user.uid;
        this.email = userEmail + '!';
        localStorage.setItem('userUID', userUID);
        console.log('Email: ', userEmail);
        console.log('User: ', user);
        this.isLogged = true;
        if (userEmail == 'semamaanal5@gmail.com')
        {
          this.admin = true;
        } else {
          this.admin = false;
        }
        // ...
      } else {
        this.isLogged = false;
        // User is signed out
        // ...
      }
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.opcion = params.get('opcion');
    });

    if (this.usuarios == null) {
      this.opcion = 'No se encuentran usuarios actualmente';
    } else {
      this.opcion = 'Hay usuarios registrados';
    }
    console.log(this.opcion);

    this.text = window.document.body.innerText;
    console.log(this.synth);
    console.log(this.text);
    this.utter = new SpeechSynthesisUtterance(this.text);
    this.utter.lang = 'es-ES';
  }

  onClick() {
    Notiflix.Notify.info('¡Nos vemos! No se te olvide tomar agua :)');
    this.userService
      .logout()
      .then(() => {
        this.router.navigate(['/inicio/register']);
        this.admin = false;
        this.isLogged = false;
        localStorage.removeItem('userUID');
      })
      .catch((error) => console.log(error));
  }

  playSpeechMode() {
    console.log('click reproducir');
    if (this.myPause === true && this.synth.speaking === true) {
      this.synth.resume();
      this.myPause = false;
    } else {
      this.synth.speak(this.utter);
    }
  }

  stopSpeechMode() {
    this.synth.cancel();
  }

  pauseSpeechMode() {
    if (this.myPause === false && this.synth.speaking === true) {
      this.synth.pause();
      this.myPause = true;
    }
  }

  // Método Dark Mode
  darkMode() {
    const card = window.document.querySelector('.card');
    const navbar = window.document.querySelector('.navbar');
    const offcanvas = window.document.querySelector('.offcanvas');
    const btnClose = window.document.querySelector('.btn-close');
    if (this.dark === false) {
      this.dark = true;
      card?.classList.add('bg-dark', 'text-white');
      navbar?.classList.add('navbar-dark', 'bg-dark');
      window.document.body.style.backgroundColor = '#222';
      window.document.body.classList.add('darkBody');
      offcanvas?.classList.add('bg-dark', 'text-white');
      btnClose?.classList.add('btn-close-white');
      this.darkModeBtn.nativeElement.innerHTML = `Modo Claro <span class="material-symbols-outlined">
      light_mode
      </span>`;
    } else {
      this.dark = false;
      card?.classList.remove('bg-dark', 'text-white');
      navbar?.classList.remove('navbar-dark', 'bg-dark');
      offcanvas?.classList.remove('bg-dark', 'text-white');
      btnClose?.classList.remove('btn-close-white');
      window.document.body.style.backgroundColor = '#fff';
      window.document.body.classList.remove('darkBody');
      this.darkModeBtn.nativeElement.innerHTML = `Modo Oscuro <span class="material-symbols-outlined">
      dark_mode
      </span>`;
    }
  }

  upFontSize() {
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i] as HTMLElement;
      element.style.fontSize = '23px';
    }
  }

  downFontSize() {
    for (let i = 0; i < this.elements.length; i++) {
      let element = this.elements[i] as HTMLElement;
      element.style.fontSize = '16px';
    }
  }

  blueFilter() {
    if (this.activado === false) {
      window.document.body.classList.add('blue-filter');
      this.blueFiltBtn.nativeElement.innerHTML = `Desactivar Filtro<span class="material-symbols-outlined">
      toggle_on
      </span>`;
      this.activado = true;
    } else {
      window.document.body.classList.remove('blue-filter');
      this.blueFiltBtn.nativeElement.innerHTML = `Activar Filtro <span class="material-symbols-outlined">
      toggle_off
      </span>`;
      this.activado = false;
    }
  }
}
