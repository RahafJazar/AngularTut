import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobseekerProfileComponent } from '../components/jobseeker-profile/jobseeker-profile.component';



@NgModule({
  declarations: [
    JobseekerProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JobseekerProfileComponent
  ]
})
export class JobseekersModule { }
