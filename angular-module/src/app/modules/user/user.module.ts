import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { CompanyModule } from '../company/company.module';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    CompanyModule
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { }
