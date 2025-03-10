import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProfileComponent } from '../components/company-profile/company-profile.component';
import { JobsModule } from '../jobs/jobs.module';
import { UsersModule } from '../users/users.module';
import { CompanyRoutingModule } from './company-routing.module';



@NgModule({
  declarations: [
    CompanyProfileComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    JobsModule,
    UsersModule
  ],
  exports: [
    CompanyProfileComponent
  ]
})
export class CompanyModule { }
