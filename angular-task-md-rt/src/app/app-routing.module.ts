import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './features/shared/components/auth-layout/auth-layout.component';
import { MainFeaturesWrapperListComponent } from './components/main-features-wrapper-list/main-features-wrapper-list.component';

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
  },
  {
    path: 'wrapper-features',
    component: MainFeaturesWrapperListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
