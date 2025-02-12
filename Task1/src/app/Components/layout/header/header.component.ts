import { Component } from '@angular/core';
import layoutComponents from '../layoutComponents';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...layoutComponents],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  myName: string = "";
  setUserName(event: any): void {
    this.myName = event.target.value;
  }

  //logout From Header 
  logOutFromHeader(event: string): void {
    console.log(event)
    alert(event)
  }

}
