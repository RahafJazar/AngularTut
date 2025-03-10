import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobsListComponent } from '../components/my-jobs-list/my-jobs-list.component';
import { JobsRoutingModule } from './jobseekers-routing.module';



@NgModule({
  declarations: [
    MyJobsListComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ],
  exports: [
    MyJobsListComponent
  ]
})
export class JobsModule { }
