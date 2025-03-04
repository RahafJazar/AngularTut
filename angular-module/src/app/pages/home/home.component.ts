import { Component } from '@angular/core';
import components from '../../components/components';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [components],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  goToProfile() {
    window.location.assign('/profile')
  }
}
