import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';
  loading = false;

  constructor(private router: Router) {
    //inject service into constructor (DI)
  }

  loginClick(): void {
    this.error = '';
    if (this.username && this.password) {
      this.loading = true;
      console.log('1')
      //redirect to users page
      setTimeout(() => { //register fn callback
        console.log('2')
        //navigate using router object
        this.router.navigate(['users', 'jordan', 'amman', 1, 'desc'], {queryParams: {'test1': '1111111111'}});
        //this.router.navigateByUrl('/users/jordan/amman/1/desc')
      }, 3000);
      console.log('3')
    } else {
      //show error
      this.error = 'Invalid username or password';
    }
  }
}
