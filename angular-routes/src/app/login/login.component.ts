import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName: string = "";
  password: string = "";
  error: string = '';
  loading: boolean = false;

  usersInfo: string[] = []
  @Output() usernameHandler: EventEmitter<string[]> = new EventEmitter<string[]>();


  constructor(private router: Router) { }

  loginClick() {
    if (this, this.userName && this.password) {
      this.loading = true
      this.usersInfo.push(this.userName);
      this.usersInfo.push(this.password)
      this.usernameHandler.emit(this.usersInfo)

      //redirect to user page
      setTimeout(() => {
        this.router.navigate(['users', 'Jordan', 'Amman', 1, 'descending'])
      }, 3000)
    }
    else {
      //show error
      this.error = "invalid username and password"
    }
  }
}
