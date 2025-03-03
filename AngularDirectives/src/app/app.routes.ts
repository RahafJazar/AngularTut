import { Routes } from '@angular/router';
import { PipesPagesComponent } from './pipes-pages/pipes-pages.component';
import { SpyComponent } from '../app/lifeCycleHook/spy/spy.component';
import { OnChangesParentComponent } from './lifeCycleHook/on-changes-parent/on-changes-parent.component';

export const routes: Routes = [

    {
        path: 'pipes',
        component: PipesPagesComponent
    },
    {
        path: 'spy',
        component: SpyComponent
    },
    {
        path: "on-changes",
        component: OnChangesParentComponent
    }
];
