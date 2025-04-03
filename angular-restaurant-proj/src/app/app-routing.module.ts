import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './features/shared/components/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',

    component: LoginComponent
  },
  //lazy loading for users module
  {
    path: 'restaurant',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/users/users.module').then((m) => m.UsersModule)
      },
      {
        path: '',
        loadChildren: () => import('./features/meals/meals.module').then((m) => m.MealsModule)
      }
    ]

  },
  // //lazy loading for users module
  // {
  //   path: 'users',
  //   loadChildren: () => import('./features/users/users.module').then((m) => m.UsersModule)
  // },

  //lazy lodaing for meals module 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
