import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobseekerProfileComponent } from '../components/jobseeker-profile/jobseeker-profile.component';
import { MyJobsListComponent } from '../components/my-jobs-list/my-jobs-list.component';

const routes: Routes = [
  {
    path: '',
    component: JobseekerProfileComponent
  },
  {
    path: 'jobSeeker',
    component: JobseekerProfileComponent
  },
  {
    path: 'my-job',
    component: MyJobsListComponent
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
export class JobsRoutingModule { }
