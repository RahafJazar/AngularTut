import { Component } from '@angular/core';
import { layoutComponents } from '../layout/layout';
import { UserNameComponent } from "../layout/user-name/user-name.component";
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [...layoutComponents, UserNameComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  firstName: string = '';
  lastName: string = ' ';
  email: string = '';
  subject: string = '';
  password: string = '';
passwordConfirm :string ='';
  setFirstName(firstName: any): void {
    this.firstName = firstName.target.value;
  }
  setLastName(lastName: any): void {
    this.lastName = lastName.target.value;
  }
  setEmail(email: any): void {
    this.email = email.target.value;
  }
  setPassword(password: any): void {
    this.password = password.target.value;
  }
  setConfirmPassword(passwordConfirmed:any):void{
    this.passwordConfirm = passwordConfirmed.target.value;
  }
  checkFormValidation(): void {
    if (this.firstName == '' || this.lastName == '' || this.email == '' || this.password == '' || this.passwordConfirm =='') {
      alert('please fill all required message')
    }
    else if (this.password === this.passwordConfirm) {
      alert('User has been added successfully')
    }
    else{
      alert("Password and Confirm Password are mismatch")
    }
  }

  bgColor: string = '';
  otherColor:string=''
  changeTheme(event: string[]): void {
    this.bgColor = event[0];
    this.otherColor=event[1]
  }
}
