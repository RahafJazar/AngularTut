import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { appConfig } from '../app.config';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
