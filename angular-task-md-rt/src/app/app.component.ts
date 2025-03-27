import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './features/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-task-md-rt';
  constructor(private router: Router, private authService: AuthService) {

  }
  ngOnInit(): void {
    this.authService.log("This is example on services ");
  }



  // ngOnInit(): void {
  //   this.router.navigate(['login'])
  // }


}
