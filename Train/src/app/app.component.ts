import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { layoutComponents } from './Components/layout/layoutComponents';
import { HeaderComponent } from './Components/layout/header/header.component';
import { empty, every } from 'rxjs';
import { UserMenuComponent } from "./Components/layout/user-menu/user-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, UserMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: string = 'train1';
  protected x: string = 'x';

  constructor() {

  }
  ngOnInit(): void {
    this.changeTitleST();

  }

  changeTitleST(): void {
    setTimeout(() => {
      this.title = "ang-tut"
    }, 5000);

    const html = document.createElement("div");
    html.innerHTML = ' <p> Hello </p>'
    // document.getElementById("Doc")?.removeChild(document.getElementById("Doc")?)
    setTimeout(() => {

      document.getElementById("Doc")?.append(html)
    }, 5000);
  }

  obj: { name: string, age: number } = { name: "rahaf", age: 24 };
  logoutClicked(event: boolean): void {
    console.log("the result :", event)
  }

  buttonClicked(): void {
    this.obj.name = "Mahmoud"
  }
  changeTitle(event: any): void {
    console.log("event of  change ", event.target.value)
    this.title = event.target.value;
  }
  keyDownTitle(event: any): void {
    console.log("Key Down : ", event.target.value);

  }
  keyUpTitle(event: any): void {
    console.log("Key up:", event, event.target.value)
    this.title = event.target.value
  }
  keyPressTitle(event: any): void {
    // console.log("key press", event.target.value)
  }
  buttonNumberClicked(event: any): void {
    console.log(event);
    console.log(event.target.innerText)

  }
  userName: string = ""
  changeUserName(event: any): void {
    this.userName = event.target.value
  }

  logOutClicked(event: boolean): void {
    console.log("output decorator: ", event)
    // alert(event)
    setTimeout(()=>{
      window.location.assign('/')
    },3000)
    
  }
  logoutRClickedRouting():void{
      window.location.assign('/')
  }
}
