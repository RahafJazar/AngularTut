import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss'
})
export class AuthHeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.log("Welcome  from auth header component ")
  }
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
