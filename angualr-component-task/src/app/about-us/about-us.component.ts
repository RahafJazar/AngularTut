import { Component } from '@angular/core';
import { layoutComponents } from '../layout/layout';
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [...layoutComponents],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
