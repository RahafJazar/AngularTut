import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesListComponent } from './admin/components/companies-list/companies-list.component';
import { LookupsListComponent } from './admin/components/lookups-list/lookups-list.component';
import { SettingsComponent } from './admin/components/settings/settings.component';
import { CompanyProfileComponent } from './companies/components/company-profile/company-profile.component';
import { JobsListComponent } from './companies/components/jobs-list/jobs-list.component';
import { UsersListComponent } from './companies/components/users-list/users-list.component';
import { JobseekerProfileComponent } from './jobSeeker/components/jobseeker-profile/jobseeker-profile.component';
import { MyJobsListComponent } from './jobSeeker/components/my-jobs-list/my-jobs-list.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesListComponent,
    LookupsListComponent,
    SettingsComponent,
    CompanyProfileComponent,
    JobsListComponent,
    UsersListComponent,
    JobseekerProfileComponent,
    MyJobsListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
