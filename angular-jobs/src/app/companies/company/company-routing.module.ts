import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobsModule } from '../jobs/jobs.module';
import { UsersModule } from '../users/users.module';
import { CompanyProfileComponent } from '../components/company-profile/company-profile.component';
import { JobsListComponent } from '../components/jobs-list/jobs-list.component';
import { UsersListComponent } from '../components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'company-users'

  },
  {
    path: 'profile',
    component: CompanyProfileComponent
  },
  {

    path: 'company-jobs',
    loadChildren: () => import("../jobs/jobs.module").then(m => m.JobsModule)
  },
  {
    path: 'company-users',
    loadChildren: () => import("../users/users.module").then(m => m.UsersModule)
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
export class CompanyRoutingModule { }
