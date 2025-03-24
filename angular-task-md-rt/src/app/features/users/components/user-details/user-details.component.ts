import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getUser } from '../../../database/users-localStoraage';
import User from '../../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  error: string = '';
  success: string = '';
  loading: boolean = false;
  id: string | null = '';
  user!: User;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id) {
      this.loading = true
      getUser(this.id).then((user: User) => {

        this.loading = false;
        this.user = user
      }).catch((error: string) => {
        this.error = error;
        this.loading = false
      })
    } else {
      this.error = 'Invalid user id '
    }
  }
}