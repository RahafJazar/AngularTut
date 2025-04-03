import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersDetailsComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule

  ]
})
export class UsersModule { }
