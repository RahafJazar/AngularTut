import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import User from "./models/User";
import { FormsModule } from '@angular/forms';
import { Child1Component } from './child1/child1.component';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, Child1Component, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.child.firstName)
    this.child.firstName = "Aymam"
  }
  ngOnInit(): void {

  }
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
  attributeDirec: string | Record<string, boolean> = 'color-blue   border-black';
  divStyle: Record<string, string> = {
    "border": "1px solid black",
    "color": "red",
    "backgroundColor": "white",
    "display": "block"
  }
  ngModelEmail: string = "Email Address";

  toggleButtonClick() {
    this.showPanel = !this.showPanel
  }

  namex: string = "John Doe"; // Parent property

  // Method to handle updates from the child
  onNameChange(updatedName: string) {
    this.namex = updatedName;
  }






  //viewchild
  @ViewChild(ChildComponent) child!: ChildComponent;


}
enum UserStatus {
  success = "success",
  failed = "failed",
  pending = "pending"
}
