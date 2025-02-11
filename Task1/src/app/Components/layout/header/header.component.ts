import { Component, EventEmitter, Output } from '@angular/core';
import { layoutComponents } from '../layoutComponents';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...layoutComponents],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Output() LogoutClick:EventEmitter<boolean>=new EventEmitter<boolean>()
logoutClicked():void{
  this.LogoutClick.emit(true)
}
}
