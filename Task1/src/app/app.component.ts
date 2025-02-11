import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { layoutComponents } from './Components/layout/layoutComponents';
import { HeaderComponent } from './Components/layout/header/header.component';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: string = 'train1';
  protected x: string = 'x';

  constructor() {

  }
  ngOnInit(): void {
    this.changeTitle();

  }

  changeTitle(): void {
    setTimeout(() => {
      this.title = "ang-tut"
    }, 5000);

    const html = document.createElement("div");
    html.innerHTML = ' <p> Hello </p>'
    // document.getElementById("Doc")?.removeChild(document.getElementById("Doc")?)
    setTimeout(() => {
      debugger
      document.getElementById("Doc")?.append(html)
    }, 5000);
  }


  logoutClicked(event: boolean): void {
    console.log("the result :", event)
  }
}
