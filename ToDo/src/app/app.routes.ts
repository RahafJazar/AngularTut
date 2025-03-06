import { Routes } from '@angular/router';
import { ToDoListPageComponent } from './to-do-list-page/to-do-list-page.component';
import { MyToDoListPagesComponent } from './my-to-do-list-pages/my-to-do-list-pages.component';

export const routes: Routes = [
    {
        path: "to-do",
        component: ToDoListPageComponent

    },
    {
        path: "my-to-do",
        component: MyToDoListPagesComponent
    }
];
