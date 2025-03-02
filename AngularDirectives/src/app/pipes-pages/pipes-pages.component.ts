import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgesPipe } from '../pipes/ages.pipe';

@Component({
  selector: 'app-pipes-pages',
  standalone: true,
  imports: [CommonModule ,AgesPipe],
  templateUrl: './pipes-pages.component.html',
  styleUrl: './pipes-pages.component.scss'
})
export class PipesPagesComponent {
dob:Date =new Date("1995-02-01");
name:string ="Rahaf";
currency :number =5;
num:number =20;
value :number= 45.678945664343;
}
