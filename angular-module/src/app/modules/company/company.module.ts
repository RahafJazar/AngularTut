import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { ListCompanyComponent } from './components/list-company/list-company.component';
import { DetailsCompanyComponent } from './components/details-company/details-company.component';
import { CompanyLogoComponent } from './components/company-logo/company-logo.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './components/company/company.component';
import { RouterModule } from '@angular/router';




const privateDecl: any[] = [
  //only in declarations
  CompanyLogoComponent
]

const publicDecl: any[] = [
  //that's will be in declarations and exports
  AddCompanyComponent,
  ListCompanyComponent,
  DetailsCompanyComponent,
  CompanyComponent
]
@NgModule({
  declarations: [
    ...publicDecl,
    ...privateDecl


  ],
  imports: [
    CommonModule,
    SharedModule,
    CompanyRoutingModule
  ],
  exports: [
    ...publicDecl
  ]
})
export class CompanyModule { }
