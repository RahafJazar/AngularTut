import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import User from "./models/User";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  initiUsers(): User[] {
    return [
      { id: 1, name: "abdullah", age: 30 },
      { id: 2, name: "ayman", age: 24 },
      { id: 3, name: "far", age: 20 }
    ]
  }
  title = 'AngularDirectives';
  showPanel: boolean = false;
  users: User[] = this.initiUsers()
  userStatus: UserStatus = UserStatus.success;
  userStatusEnum = UserStatus;
  toggleButtonClick() {
    this.showPanel = !this.showPanel
  }


}
enum UserStatus {
  success = "success",
  failed = "failed",
  pending = "pending"
}
