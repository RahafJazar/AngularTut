import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  success: boolean = false;


  //to use router service, we need to inject router service 
  constructor(private router: Router) {

  }

  userLogin() {
    //always  reset the error  & success when user  press the login  button
    this.error = '';
    this.success = false;
    //check if email  and passwword are valid 
    if (this.email.trim() && this.password.trim()) {
      //success
      this.success = true
      setTimeout(() => {
        this.router.navigate(['restaurant'])
      }, 2000);

    } else {
      this.error = 'Invalid email or password'
      alert(this.error)
    }
  }
}
