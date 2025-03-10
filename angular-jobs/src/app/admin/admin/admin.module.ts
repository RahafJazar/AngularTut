import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CompaniesModule } from '../companies/companies.module';
import { SettingsModule } from '../settings/settings.module';
import { UsersModule } from '../../companies/users/users.module';
import { LookupsModule } from '../lookups/lookups.module';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CompaniesModule,
    SettingsModule,
    LookupsModule

  ],
  exports: [
    DashboardComponent
  ]
})
export class AdminModule { }
