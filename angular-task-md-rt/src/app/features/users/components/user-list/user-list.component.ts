import { Component, OnInit } from '@angular/core';
import { getUsers } from '../../../database/users';
import User from '../../../models/user.model';
import { ActivatedRoute, Params } from '@angular/router';
import PaginatedResponse from '../../../shared/models/paginated-response';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true
    getUsers(this.currentPage, this.size).then((response: PaginatedResponse<User>) => {
     console.log("response.totalItems")
      this.users = response.data;
     console.log("users" , this.users)

      //fill pages array
      this.pages = []
      for (let index = 1; index <= response.totalPages; index++) {
        this.pages.push(index)
      }
      this.loading = false
    })
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.currentPage = parseInt(queryParams['page'] || 1)
      console.log("page param :", parseInt(queryParams['page'] || 1))
      console.log("current page :", this.currentPage)
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
