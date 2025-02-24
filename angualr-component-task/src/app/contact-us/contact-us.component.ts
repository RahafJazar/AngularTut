import { Component } from '@angular/core';
import { layoutComponents } from '../layout/layout';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [...layoutComponents],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  setName(name: any): void {
    this.name = name.target.value;
  }
  setEmail(email: any): void {
    this.email = email.target.value;
  }
  setSubject(subject: any): void {
    this.subject = subject.target.value;
  }
  setMessage(message: any): void {
    this.message = message.target.value;
  }

  checkFormValidation(): void {
    if (this.name == '' || this.email == '' || this.subject == '' || this.message == '') {
      alert('please fill all required fields')
    }
    else {
      alert('Your message has been sent , Thank you!')
    }
  }

  bgColor: string = '';
  otherColor:string=''
  changeTheme(event: string[]): void {
    this.bgColor = event[0];
    this.otherColor=event[1]
  }
}
