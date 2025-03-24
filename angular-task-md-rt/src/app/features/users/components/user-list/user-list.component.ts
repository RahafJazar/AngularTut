import { Component, OnInit } from '@angular/core';

import { getUsers, fillData, deleteUser, clearAllUsers } from '../../../database/users-localStoraage';
import User from '../../../models/user.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import PaginatedResponse from '../../../shared/models/paginated-response';
import { signalSetFn } from '@angular/core/primitives/signals';
import { from } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  loading: boolean = false;
  pages: number[] = [1, 2, 3, 4, 5];
  currentPage: number = 1
  size: number = 5;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    fillData()
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.currentPage = parseInt(queryParams['page'] || 1)
      console.log("page param :", parseInt(queryParams['page'] || 1))
      console.log("current page :", this.currentPage);
      if (queryParams['size']) {
        this.size = parseInt(queryParams['size'] || 5)
      }
      this.loadUsers();
    })
  }

  loadUsers(): void {
    this.loading = true
    getUsers(this.currentPage, this.size).then((response: PaginatedResponse<User>) => {
      if (this.currentPage > response.totalPages) {
        this.router.navigate(['users', 'user-list'], { queryParams: { page: 1, size: this.size } });

      }
      console.log("response.totalItems")
      this.users = response.data;
      console.log("users", this.users)

      //fill pages array
      this.pages = []
      for (let index = 1; index <= response.totalPages; index++) {
        this.pages.push(index)
      }
      this.loading = false;

    })
  }
  deleteUser(user: User): void {


    deleteUser(user).then((status: boolean) => {
      alert(`User ${user.name} deleted successfully`);
    }).catch((error: String) => {

    })
    this.loadUsers()

  }
  detailUser(): void {
    throw new Error('Method not implemented.');
  }

  changeSize(size: number): void {
    this.size = size;
    this.currentPage = 1;
    console.log()
    this.router.navigate(['users', 'user-list'], { queryParams: { page: this.currentPage, size: this.size } })
  }

  clearUsers(): void {
    clearAllUsers();
    this.pages = [];
    this.users = []
  }
}

