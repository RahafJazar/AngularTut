import { Component } from '@angular/core';
import { layoutComponents } from '../layoutComponents';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...layoutComponents],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
