import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',


  animations: [
    trigger('routeAnimations', [
      transition('HomePage => LoginPage', [
        query(':enter', [
          style({ transform: 'translateY(-100%)', opacity: 0 }), // Start fully above
          animate('1s ease-out',
            style({ transform: 'translateY(0)', opacity: 1 })) // Smoothly slide down
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // console.log("go to home")
    // window.location.assign("/home")
  }
  title = 'angualr-component-task';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}








