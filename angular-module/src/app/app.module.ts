import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from './about/about.component';


import { CompanyModule } from './modules/company/company.module';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './modules/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [

    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CompanyModule,
    UserModule,
    SharedModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
