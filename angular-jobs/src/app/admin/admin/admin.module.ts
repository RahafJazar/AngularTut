import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CompaniesModule } from '../companies/companies.module';
import { SettingsModule } from '../settings/settings.module';
import { UsersModule } from '../../companies/users/users.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CompaniesModule,
    SettingsModule,
 
  ],
  exports:[
    DashboardComponent
  ]
})
export class AdminModule { }
