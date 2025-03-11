import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobsListComponent } from '../components/my-jobs-list/my-jobs-list.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    MyJobsListComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule
  ],
  exports: [
    MyJobsListComponent
  ]
})
export class JobsModule { }
