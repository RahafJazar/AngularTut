import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserFeaturesWrapperListComponent } from './components/user-features-wrapper-list/user-features-wrapper-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-list'
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent
  },
  {
    path: 'edit/:id',
    component: UserFormComponent
  },
  {
    path: 'add',
    component: UserFormComponent
  },


  {
    path: 'features',
    component: UserFeaturesWrapperListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
