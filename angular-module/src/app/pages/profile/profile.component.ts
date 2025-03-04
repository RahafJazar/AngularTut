import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CapitalizePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() user: any;
  @Output() logout = new EventEmitter<void>();

  onLogout() {
    this.logout.emit();
  }
}
