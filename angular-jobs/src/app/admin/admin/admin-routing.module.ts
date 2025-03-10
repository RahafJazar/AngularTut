import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesModule } from '../companies/companies.module';
import { LookupsModule } from '../lookups/lookups.module';
import { SettingsModule } from '../settings/settings.module';
import { CompaniesListComponent } from '../components/companies-list/companies-list.component';
import { LookupsListComponent } from '../components/lookups-list/lookups-list.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'companies',
    component: CompaniesListComponent
  },
  {
    path: 'lookups',
    component: LookupsListComponent
  },
  {
    path: 'setting',
    component: SettingsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,

  ]
})
export class AdminRoutingModule { }
