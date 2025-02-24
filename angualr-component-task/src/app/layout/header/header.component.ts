import { Component, EventEmitter, Output } from '@angular/core';
import { UserNameComponent } from "../user-name/user-name.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserNameComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  firstName: string = "Rahaf";
  lastName: string = "Jazar";

  themeImg: string = "darkTheme"
  isLight: boolean = true;
  themeColor: string[] = []
  @Output() themedColored: EventEmitter<string[]> = new EventEmitter<string[]>()
  changeTheme(): void {
    this.isLight = !this.isLight;
    if (this.isLight) {
      this.themeImg = "darkTheme"
      this.themeColor[0] = "lightTheme"
      this.themeColor[1] = "otherLightTheme"

    }
    else {
      this.themeImg = "lightTheme"
      this.themeColor[0] = "darkTheme"
      this.themeColor[1] = "darkTheme"
    }

    this.themedColored.emit(this.themeColor)
  }

  get themeImagePath(): string {
    return `../../../assets/${this.themeImg}.png`;
  }

  logoutPressed(): void {
    window.location.href = "/login"
  }
}
