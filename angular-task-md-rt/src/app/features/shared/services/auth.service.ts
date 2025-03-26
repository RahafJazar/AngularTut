import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }


  logout():void{
    const remeber: any = localStorage.getItem('remember-me') || null;
    if ((remeber === 'true')) {
      localStorage.removeItem('current-user')
    } else {
      sessionStorage.removeItem('current-user')
    }
    this.router.navigate(['login'])
  }
}
