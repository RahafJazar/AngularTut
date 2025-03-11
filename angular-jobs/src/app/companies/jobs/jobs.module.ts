import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsListComponent } from '../components/jobs-list/jobs-list.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    JobsListComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule
  ],
  exports: [
    JobsListComponent
  ]
})
export class JobsModule { }
