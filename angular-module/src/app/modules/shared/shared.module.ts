import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../../app.module';
import { CompanyModule } from '../company/company.module';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';


const decl = [
  CardComponent,
  FooterComponent,
  HeaderComponent,
  LogoComponent,
  NavbarComponent,
  MainLayoutComponent
]
@NgModule({
  declarations: [
    ...decl,


  ],
  imports: [

    CommonModule,
    RouterModule
  ],
  exports: [
    ...decl
  ]
})
export class SharedModule { }
