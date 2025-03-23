import { Component, OnInit } from '@angular/core';
import { getUsers } from '../../../database/users';
import User from '../../../models/user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  loading: boolean = false;
  pages: number[] = [];
  currentPage: number = 0
  ngOnInit(): void {
    this.loading = true
    getUsers().then((users: User[]) => {

      this.users = [...users]
      this.loading = false
    })
  }

  deleteUser(user: User, index: number): void {
    this.users.splice(index, 1);
    alert(`User ${user.name} deleted successfully`)
  }
  detailUser(): void {
    throw new Error('Method not implemented.');
  }
}
