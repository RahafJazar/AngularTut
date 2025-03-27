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
import { UserFeaturesWrapperListComponent } from './components/user-features-wrapper-list/user-features-wrapper-list.component';
import { UsersService } from './services/users.service';

const userComponents = [
  UserListComponent,
  UserFormComponent,
  UserDetailsComponent
]
@NgModule({
  declarations: [
    ...userComponents,
    UserFeaturesWrapperListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule

  ],
  providers: [
    { provide: UsersService, useClass: UsersService }
  ]
})
export class UsersModule { }
