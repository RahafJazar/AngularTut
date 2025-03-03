import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpyDirective } from './spy.directive';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-spy',
  standalone: true,

  imports: [CommonModule, SpyDirective],
  templateUrl: './spy.component.html',
  styleUrl: './spy.component.scss'
})
export class SpyComponent {
  heros: Hero[] = [
    {
      name: "Rahaf",
      age: 23
    },
    {
      name: "aya",
      age: 26
    },
    {
      name: "saaed",
      age: 20
    },



  ]
}