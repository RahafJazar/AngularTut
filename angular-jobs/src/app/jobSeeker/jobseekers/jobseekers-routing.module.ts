import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobseekerProfileComponent } from '../components/jobseeker-profile/jobseeker-profile.component';
import { MyJobsListComponent } from '../components/my-jobs-list/my-jobs-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'jobs'
  },
  {
    path: 'jobSeeker',
    component: JobseekerProfileComponent
  },
  {
    path: 'jobs',
    loadChildren: () => import('../jobs/jobs.module').then(m => m.JobsModule)
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
export class JobseekersRoutingModule { }
