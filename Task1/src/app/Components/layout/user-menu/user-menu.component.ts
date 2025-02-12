import { Component, EventEmitter, Input, Output } from '@angular/core';
import layoutComponents from '../layoutComponents';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [...layoutComponents],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {
  //Send Data From Parent (app-header) to child1 (app-user-menu)
  @Input() yourName: string | null = null

  //Send Data From  child2 (app-user-menu (parent1)) to Parent2 (app-header) 
  @Output() logOutFromHeader: EventEmitter<string> = new EventEmitter<string>();



  logOutFromMenu(event: string): void {
    this.logOutFromHeader.emit("Good Luck " + this.yourName);
  }

}
