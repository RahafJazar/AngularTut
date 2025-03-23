import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HidePasswordPipe } from '../shared/pipes/hide-password.pipe';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

const userComponents = [
  UserListComponent,
  UserFormComponent,
  UserDetailsComponent
]
@NgModule({
  declarations: [
    ...userComponents
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,

  ]
})
export class UsersModule { }
