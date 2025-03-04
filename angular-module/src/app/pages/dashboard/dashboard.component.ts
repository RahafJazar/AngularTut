import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  users: any[] = [];

  ngOnInit(): void {
    console.log("Dashboard Component Initialized'")
    this.fetchUsers()
  }

  fetchUsers(): void {
    setTimeout(() => {
      this.users = [
        { name: "rahaf", age: 34 },
        { name: "Alaa", age: 25 },

      ]
    }, 2000);
  }


  ngOnDestroy(): void {
    console.log("Dashboard Component Destroyed")
  }

}
