import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobseekerProfileComponent } from '../components/jobseeker-profile/jobseeker-profile.component';
import { JobsModule } from '../jobs/jobs.module';
import { JobseekersRoutingModule } from './jobseekers-routing.module';



@NgModule({
  declarations: [
    JobseekerProfileComponent
  ],
  imports: [
    CommonModule,
    JobseekersRoutingModule,

  ],
  exports: [
    JobseekerProfileComponent
  ]
})
export class JobseekersModule { }
