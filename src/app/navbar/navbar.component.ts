import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Auth, getAuth, onAuthStateChanged } from '@angular/fire/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  admin: any;
  isLogged: any;
  authU = getAuth();
  usuarios: any = localStorage.getItem("usuarios") || [];
  opcion!: string | null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private auth: Auth
    ) {}
  
  ngOnInit(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const userEmail = user.email;
        const userUID = user.uid;
        localStorage.setItem("userUID", userUID);
        console.log('Email: ', userEmail);
        console.log('User: ', user);
        this.isLogged = true;
        if (userEmail == 'alanaxel121@gmail.com')
        {
          this.admin = true;
        } 
        else 
        {
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

    if (this.usuarios == null){
      this.opcion = 'No se encuentran usuarios actualmente';
    }
    else
    {
      this.opcion = 'Hay usuarios registrados';
    }
    console.log(this.opcion);
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/inicio/register']);
        this.admin = false;
        this.isLogged = false;
        localStorage.removeItem('userUID');
      })
      .catch(error => console.log(error));
  }

  
}
