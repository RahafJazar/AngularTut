import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsListComponent } from '../components/jobs-list/jobs-list.component';



@NgModule({
  declarations: [
    JobsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JobsListComponent
  ]
})
export class JobsModule { }
