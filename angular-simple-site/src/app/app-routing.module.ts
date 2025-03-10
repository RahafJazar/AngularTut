import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DemoComponent } from './pages/demo/demo.component';
import { DownloadComponent } from './pages/download/download.component';
import { MainLayoutComponent } from './modules/shared/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'demo',
        component: DemoComponent
      },
      {
        path: 'download',
        component: DownloadComponent
      }
    ]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
