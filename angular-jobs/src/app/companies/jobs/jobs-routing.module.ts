import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobsModule } from './jobs.module';
import { UsersModule } from '../users/users.module';
import { CompanyProfileComponent } from '../components/company-profile/company-profile.component';
import { JobsListComponent } from '../components/jobs-list/jobs-list.component';
import { UsersListComponent } from '../components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'jobs'
  },
  {
    path: 'jobs',
    component: JobsListComponent
  },

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
export class JobsRoutingModule { }
