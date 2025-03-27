import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { isTemplateLiteral } from 'typescript';
import User from '../../features/users/models/user.model';
import { loginUser } from '../../features/users/database/users';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  error: string = '';
  success: boolean = false;
  loading: boolean = false;
  rememberMe: boolean = false;

  constructor(private router: Router) { }
  ngOnInit(): void {
    const remeber: any = localStorage.getItem('remember-me') || null;
    let currentUser: any = null


    if (remeber === 'true') {
      this.email = localStorage.getItem('email') || '';
      this.rememberMe = true;
      const userData = localStorage.getItem('current-user')
      currentUser = userData ? JSON.parse(userData) : null;
    }
    else {
      const userData = sessionStorage.getItem('current-user')
      currentUser = userData ? JSON.parse(userData) : null
    }
    if (currentUser) {
      this.router.navigate(['users'])
    }
  }
  userLogin() {
    //check if email and password are valid 
    if (this.email.trim() && this.password.trim()) {
      //success login
      this.loading = true
      loginUser(this.email, this.password).then((user: User) => {
        console.log(this.email + " " + this.password)
        this.loading = false;
        this.success = true;
        this.error = '';


        localStorage.setItem('remember-me', JSON.stringify(this.rememberMe))
        if (this.rememberMe) {
          localStorage.setItem('email', this.email + '')
          localStorage.setItem('current-user', JSON.stringify(user))
        } else {
          sessionStorage.setItem('current-user', JSON.stringify(user))
        }
        if (!this.loading && this.error == '' && this.success == true) {


          alert(`welcome user:  + ${user.name}`);

          this.router.navigate(['users'])
        };
      }).catch((error: string) => {
        this.loading = false

        this.error = error
      })

    }
    else
      this.error = "invalid email and password";
  }
  RememberUser() {
    this.rememberMe = !this.rememberMe
  }
}
