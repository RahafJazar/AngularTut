import { Component, OnInit } from '@angular/core';
import { getUsers } from '../../database/users';
import User from '../../models/user.model';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  loading: boolean = false;
  ngOnInit(): void {
    this.loading = true;
    getUsers().then((users: User[]) => {
      this.users = users;
      this.loading = false;
    })
  }

  deleteUser(user: User, index: number): void {
    this.users.splice(index, 1);
    alert(`user ${user.name} deleted successfully`)
  }



}
