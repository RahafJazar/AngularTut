import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  logout(): void {
    const remember = localStorage.getItem('remember-me');
    if(remember == 'true') {
      localStorage.removeItem('current-user');
    }else{
      sessionStorage.removeItem('current-user');
    }
    this.router.navigate(['login'])
  }

  log(message: string): void {
    console.log('log message from AuthService', message)
  }
}

//To declare service and use it 
// declare service class and add @Injectable() => ng g s path-to-service/name-of-service
//ex: ng g s features/shared/services/auth => generate file named: auth.service.ts => class AuthService
// add service to module providers array => {provide: AuthService, useClass: AuthService}
// import module that has service inside external component module
// add in constructor of component 
// constructor(private service: ServiceClassName)
// angular will inject value automaticlly for service from DI Container

// const obj = {name: 'abd'}
// //JSON.stringify used to convert object or array object to string
// const val = JSON.stringify(obj);
// // console.log(val.name) //error
// localStorage.setItem('myname', ) "\{\"name\"\:\"abd\"}"

//singleton
// class SingletonX {
//   static instanceValue: SingletonX;
//   private constructor() {

//   }
//   static getInstance(): SingletonX {
//     if(!SingletonX.instanceValue) {
//       SingletonX.instanceValue = new SingletonX();
//     }
//     return SingletonX.instanceValue;
//   }
// }

// // const obj = new SingletonX(); //error
// const obj = SingletonX.getInstance(); // create instance then return value
// const obj2 = SingletonX.getInstance(); // return existing value
// const obj3 = SingletonX.getInstance(); // return existing value

// class DIContainer {
//   static authService: AuthService;
//   static router: Router;
//   static route: ActivatedRoute;

//   static getAuthService():AuthService {
//     if(!DIContainer.authService) {
//       DIContainer.authService = new AuthService();
//     }
//     return DIContainer.authService;
//   }

//   static getRouterService():Router {
//     if(!DIContainer.router) {
//       DIContainer.router = new Router();
//     }
//     return DIContainer.router;
//   }

//   static getRouteService():ActivatedRoute {
//     if(!DIContainer.route) {
//       DIContainer.route = new ActivatedRoute();
//     }
//     return DIContainer.route;
//   }
// }

// class Auth {
//   static auth:Auth;
//   private constructor(){}
//   static getInstance(): Auth {
//     if(!Auth.auth) {
//       Auth.auth = new Auth();
//     }
//     return Auth.auth;
//   }
// }


// <app-auth-loyout></app-auth-loyout>
//angular in background
// const router: Router = new Router() 
// const authService: AuthService = new AuthService(DIContainer.getRouterService()) // not needed
// const component: AuthLoyoutComponent = new AuthLoyoutComponent(DIContainer.getAuthService());



// //JSON.parse used to convert string to object or array of object
// const value = JSON.parse(localStorage.getItem('myname') || '');
// console.log(value.name)