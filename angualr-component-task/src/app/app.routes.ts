import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { animation } from '@angular/animations';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: { animation: "HomePage" }

    },
    {
        path: 'login',
        component: LoginComponent,
        data: { animation: 'LoginPage' }

    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'add-user',
        component: AddUserComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    }
];
