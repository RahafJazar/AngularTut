import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-name',
  standalone: true,
  imports: [],
  templateUrl: './user-name.component.html',
  styleUrl: './user-name.component.scss'
})
export class UserNameComponent {
  //Send Data From Parent (app-user-menu (child1)) to child2 (app-user-name)
  @Input() userName: string | null = null
}
