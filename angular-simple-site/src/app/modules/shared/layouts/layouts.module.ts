import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    MainLayoutComponent,
    LoginLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutsModule { }
