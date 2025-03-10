import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesListComponent } from '../components/companies-list/companies-list.component';



@NgModule({
  declarations: [
    CompaniesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompaniesListComponent
  ]
})
export class CompaniesModule { }
