import { Component, EventEmitter, Input, Output } from '@angular/core';
import { layoutComponents } from '../layoutComponents';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...layoutComponents],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() userName: string | null = null
  @Output() LogoutClick: EventEmitter<boolean> = new EventEmitter<boolean>()
  logoutClicked(): void {
    this.LogoutClick.emit(true)
  }
}
