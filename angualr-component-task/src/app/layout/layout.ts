import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LogoComponent } from "./logo/logo.component";
import { SideBarComponent } from "./side-bar/side-bar.component";

//array1
export const headerComponents:any[]=[
LogoComponent
]


//array2
export const layoutComponents:any[]=[
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ...headerComponents
]