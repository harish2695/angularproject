import { Route } from '@angular/router';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

export const userRoutes:Route[] = [
    {path: 'profile',component: ProfileComponent},
    {path:'login', component:LoginComponent}
]