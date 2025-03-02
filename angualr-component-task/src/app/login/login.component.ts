import { animate, style, transition, trigger, ɵBrowserAnimationBuilder } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }), // Start position (above screen)
        animate('1s ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // Animate down
      ])
    ])
  ]

})
export class LoginComponent {
  email: string = '';
  password: string = '';



  setEmail(inputEmail: any): void {
    this.email = inputEmail.target.value;
  }

  setPassword(inputPassword: any): void {
    this.password = inputPassword.target.value;
  }
  checkLoginValidation(): void {
    if (this.email === "" || this.password === "") {
      alert("Incorrect email and password");
    }
    else {

      alert("Hello  " + this.email)
      window.location.assign("/profile")
    }
  }


}
