import { Component } from '@angular/core';
import { ContactFormComponent } from "../Components/contact-form/contact-form.component";
import ContactForm from '../models/contact-form.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactData:ContactForm={name:" " ,email:" ",message :""}
  formSubmitted(value: ContactForm):void{
     this.contactData=value
  }


}
