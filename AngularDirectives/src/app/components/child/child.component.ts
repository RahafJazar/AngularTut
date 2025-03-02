import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
public firstName:string="Abdallah";
public lastName:string="sami";
public changeName(first:string,last:string):void{
  this.firstName=first;
  this.lastName=last;            
}
}
