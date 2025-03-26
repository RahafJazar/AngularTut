import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss'
})
export class AuthHeaderComponent {
  constructor(private router: Router) { }
  logoutClick() {
    const remeber: any = localStorage.getItem('remember-me') || null;
    if ((remeber === 'true')) {
      localStorage.removeItem('current-user')
    } else {
      sessionStorage.removeItem('current-user')
    }
    this.router.navigate(['login'])
  }


}
