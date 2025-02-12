import { Component, EventEmitter, Output } from '@angular/core';
import { empty } from 'rxjs';
import ContactForm from '../../models/contact-form.model';
import { TitleStrategy } from '@angular/router';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @Output() formSubmitted: EventEmitter<ContactForm> = new EventEmitter<ContactForm>()
  formData: ContactForm = {
    name: "",
    email: "",
    message: ""
  }
  setName(event: any) {
    this.formData.name = event.target.value


  }
  setEmail(event: any) {
    this.formData.email = event.target.value
  }
  setMessage(event: any) {
    this.formData.message = event.target.value
  }

  submitClicked() {
    this.formSubmitted.emit(this.formData)
  }
}
