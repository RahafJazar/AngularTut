import { Component } from '@angular/core';
import { layoutComponents } from '../layout/layout';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [...layoutComponents],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
email:string ="Rahaf@gmail.com"

bgColor: string = '';
otherColor:string=''
changeTheme(event: string[]): void {
  this.bgColor = event[0];
  this.otherColor=event[1]
}
}
