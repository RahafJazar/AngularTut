import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'

  },
  {
    path: 'list',
    component: UsersListComponent
  },
  {
    path: 'edit/:id',
    component: UsersFormComponent
  },
  {
    path: 'add',
    component: UsersFormComponent
  },
  {
    path: 'details/:id',
    component: UsersDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
