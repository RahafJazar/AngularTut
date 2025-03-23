import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { loginUser } from '../../features/database/users';
import User from '../../features/models/user.model';

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
  loading: boolean = false

  constructor(private router: Router) { }
  userLogin() {
    //check if email and password are valid 
    if (this.email.trim() && this.password.trim()) {
      //success login
      this.loading = true
      loginUser(this.email, this.password).then((user: User) => {
        console.log(this.email + " " + this.password)
        this.loading = false
        this.success = true,
          alert(`welcome user:  + ${user.name}`)
        setTimeout(() => {
          this.router.navigate(['users'])
        }, 1000);
      }).catch((error: string) => {
        this.loading = false

        this.error = error
      })

    }
    else
      this.error = "invalid email and password";
  }
}
