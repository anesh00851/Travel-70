import { Routes } from '@angular/router';
import { LocationpermissionComponent } from './onboarding/locationpermission/locationpermission.component';

export const routes: Routes = [
        {
        path: '',
        redirectTo:'onboard-location-permission',
        pathMatch:'full'
    },
    {
        path: 'onboard-location-permission',
        component: LocationpermissionComponent
    }
];
