import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './features/shared/components/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: "users",
    //promise with resolve status only 
    component: AuthLayoutComponent,
    loadChildren: () => import("./features/users/users.module").then(m => m.UsersModule)
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
