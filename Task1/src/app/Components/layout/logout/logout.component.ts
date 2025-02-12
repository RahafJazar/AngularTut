import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  //Send Data From  child1 (app-logout) to Parent1 (app-user-menu) 
  @Output() logOutFromHeader: EventEmitter<string> = new EventEmitter<string>()

  logout(): void {
    this, this.logOutFromHeader.emit();
  }

}
