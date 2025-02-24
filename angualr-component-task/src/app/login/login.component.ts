import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
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

      alert("Hello" + this.email)
      window.location.assign("/profile")
    }
  }
}
