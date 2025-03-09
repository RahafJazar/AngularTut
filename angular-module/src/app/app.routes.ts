import { Routes } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [


    { path: '', component: HomeComponent },
    {
        path: 'about',
        component: AboutComponent
    },

    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'users', component: UsersComponent }
];
