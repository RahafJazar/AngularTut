import { Component } from '@angular/core';
import { UserNameComponent } from '../user-name/user-name.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [UserNameComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  firstName:string="Rahaf";
  lastName:string="Jazar";
}
