import { Component } from '@angular/core';
import { navBar } from '../../../../models/interfaces/navBar'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navbar: navBar[] = [
    { title: 'Home', url: "/" },
    { title: 'Demo', url: '/demo' },
    { title: 'Download', url: '/download' }
  ]
}
