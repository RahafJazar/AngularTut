import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { ListCompanyComponent } from './components/list-company/list-company.component';
import { CompanyComponent } from './components/company/company.component';


const routes: Routes = [
  {
    path: 'company',
    component: CompanyComponent,
    children: [
      { path: '', component: ListCompanyComponent },
      { path: 'add', component: AddCompanyComponent },
      { path: 'list', component: ListCompanyComponent }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CompanyRoutingModule { }
