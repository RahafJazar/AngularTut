import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealsListComponent } from './components/meals-list/meals-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: MealsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealsRoutingModule { }
