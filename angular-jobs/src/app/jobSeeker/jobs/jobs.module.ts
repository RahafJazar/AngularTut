import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobsListComponent } from '../components/my-jobs-list/my-jobs-list.component';



@NgModule({
  declarations: [
    MyJobsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyJobsListComponent
  ]
})
export class JobsModule { }
