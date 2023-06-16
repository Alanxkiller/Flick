import { Component, OnInit, inject } from '@angular/core';
import { Auth, authState, getAuth, signInWithPhoneNumber } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import * as Auths from 'firebase/auth';

@Component({
  selector: 'app-login-phone',
  templateUrl: './login-phone.component.html',
  styleUrls: ['./login-phone.component.css']
})
export class LoginPhoneComponent implements OnInit {

  isVerifyEnter: boolean = false;
  phoneNumber: FormGroup;
  verifyEnter: FormGroup;
  isPhoneSignIn: boolean = false;
  recaptchaVerifier!: any;
  user$!: Observable<any>;

  constructor(
    private auth: Auth,
    private userService: UserService,
    private router: Router
  ) {
    this.phoneNumber = new FormGroup({
      phoneNumber: new FormControl()
    })
    this.verifyEnter = new FormGroup({
      verifyEnter: new FormControl()
    })
  }

  get userState$(){
    return authState(this.auth);
  }

  ngOnInit(): void {
    this.auth = getAuth();
    this.auth.languageCode = 'es';
    this.user$ = this.userState$;
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.verifyRecaptcha();
  }

 async onSubmit() {
    const auth = getAuth();
    const {phoneNumber} = this.phoneNumber.value;
    console.log(phoneNumber);

    signInWithPhoneNumber(auth, phoneNumber, this.recaptchaVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          //window.confirmationResult = confirmationResult;
         // this.isVerifyEnter = true;
          var code = window.prompt('Introduce el codigo de verificacion que fue mandado a tu numero por SMS: ');
          if (code) {
            confirmationResult.confirm(code).then( () => {
              window.close();
              this.router.navigate(['/inicio']);
            }).catch(function (error) {
              // User couldn't sign in (bad verification code?)
              console.error('Error while checking the verification code', error);
              window.alert('Error while checking the verification code:\n\n'
                  + error.code + '\n\n' + error.message)
            });
          }
          console.log(confirmationResult)
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("Error, no se envió el SMS", error)
        });
  }

  onVerifyEnter(){
    /*const auth = getAuth();
    const {verifyEnter} = this.verifyEnter.value;
    if (verifyEnter){
      confirmationResult.confirm(verifyEnter).then((result) => {
        // User signed in successfully.
        const user = result.user;
        this.router.navigate(['/main']);
        // ...
      
          //@ts-ignore
      }).catch((error) => {
        console.log("Error papu")
        // User couldn't sign in (bad verification code?)
        // ...
      });
    }*/
  
  }

  verifyRecaptcha = () => {
    /*const app = initializeApp(environment.firebase);
    const appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider('6LcLB0cmAAAAANbLSlG_hFqRtS1lyYQvhYlptj1E'),
    
      // Optional argument. If true, the SDK automatically refreshes App Check
      // tokens as needed.
      isTokenAutoRefreshEnabled: true
    });
    const auth = getAuth(app);
    auth.settings.appVerificationDisabledForTesting = false;
    auth.languageCode = 'en';    

    let recaptchaVerifier = new RecaptchaVerifier('phoneCaptcha', {}, auth)

    console.log(recaptchaVerifier)*/

    this.recaptchaVerifier = new Auths.RecaptchaVerifier('phoneCaptcha', {}, this.auth);
    console.log(this.recaptchaVerifier);

  }

  

}