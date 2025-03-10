import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./companies/company/company.module').then(m => m.CompanyModule)
  },

  {
    path: 'jobseeker',
    loadChildren: () => import('./jobSeeker/jobseekers/jobseekers.module').then(m => m.JobseekersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
