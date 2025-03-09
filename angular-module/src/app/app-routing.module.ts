import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { AddCompanyComponent } from './modules/company/components/add-company/add-company.component';
import { ListCompanyComponent } from './modules/company/components/list-company/list-company.component';
import { MainLayoutComponent } from './modules/shared/layouts/main-layout/main-layout.component';


export const routes: Routes = [


  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'users', component: UsersComponent },

    ]

  },


];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
