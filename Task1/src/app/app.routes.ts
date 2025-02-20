import { Routes } from '@angular/router';
import { HeaderComponent } from './Components/layout/header/header.component';

export const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'header', component: HeaderComponent }

];
