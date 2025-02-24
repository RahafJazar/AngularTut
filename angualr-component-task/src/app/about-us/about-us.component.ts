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
  email: string = "info@iih.ai";


  bgColor: string = '';
  otherColor:string=''
  changeTheme(event: string[]): void {
    this.bgColor = event[0];
    this.otherColor=event[1]
  }
}
