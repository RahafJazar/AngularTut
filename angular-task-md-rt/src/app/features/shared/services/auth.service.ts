import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router: Router) { }


  logout(): void {
    const remeber: any = localStorage.getItem('remember-me') || null;
    if ((remeber === 'true')) {
      localStorage.removeItem('current-user')
    } else {
      sessionStorage.removeItem('current-user')
    }
    this.router.navigate(['login'])
  }

  log(message: string): void {
    console.log('log message from auth service  :', message)
  }
}





//ex on how Dependency injection work ==>بس للفهم ما دخلهم بالتطبيق 

class DIContainer {
  static authService: AuthService;
  static router: Router
  static route: ActivatedRoute;

  constructor(private router: Router, private route: ActivatedRoute) { }


  static getAuthService(): AuthService {
    if (!DIContainer.authService) {
      DIContainer.authService = new AuthService(this.router);
    }
    return DIContainer.authService
  }

  static getRouterService(): Router {
    if (!DIContainer.router) {
      DIContainer.router = new Router()
    }
    return DIContainer.router
  }
  static getActivatedRouterService(): ActivatedRoute {
    if (!DIContainer.route) {
      DIContainer.route = new ActivatedRoute();
    }
    return DIContainer.route;
  }
}

//ex on Convert Auth component into singlton ==>بس للفهم ما دخلهم بالتطبيق 
class Auth {
  static auth: Auth;
  private constructor() { }
  static getInstance(): Auth {
    if (!Auth.auth) {
      Auth.auth = new Auth();
    }
    return Auth.auth;
  }
}
