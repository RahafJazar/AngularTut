import { Component, OnInit, ɵgetLocaleCurrencyCode } from '@angular/core';
import { addUser, getUser, updateUser } from '../../../database/users';
import User from '../../../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {

  errors: string[] = [];
  success: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  loading: boolean = false
  id: string | null = ''
  loadingForGet: boolean = false;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    if (this.id) {
      this.loadingForGet = true;
      getUser(this.id).then((user: User) => {
        this.loadingForGet=false
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
      }).catch((error: string) => {
        this.errors.push(error)
      })
    }
  }

  saveBtnClick(): void {
    this.loading = false;
    this.errors.length = 0; //reset all error
    //all cases are true
    if (this.name.trim() && this.email.trim() && this.password.trim()) {
      //success =>send data to database
      const user: User = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      if (this.id) {
        user.id = this.id;
        updateUser(user).then(
          (user: User) => {
            this.loading = false;
            this.success = "user " + user.name + " added successfully";
          }
        ).catch((error: string) => {
          this.loading = false;
          this.errors.push(error)
        })



      } else {
        this.loading = true
        addUser(user).then((user: User) => {
          this.loading = false;
          this.success = "user " + user.name + " added successfully";
        })
      }
    }
    else {
      if (!this.name.trim()) {
        this.errors.push("name is required")
      }

      if (!this.email.trim()) {
        this.errors.push("email is required")
      }
      if (!this.password.trim()) {
        this.errors.push("password is required")
      }

    }
  }
}
