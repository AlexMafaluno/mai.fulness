import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)},
    {path: 'desafios', loadComponent: () => import('./components/challenge-list/challenge-list.component').then(m => m.ChallengeListComponent)},
    {path: 'desafios/:id', loadComponent: () => import('./components/challenge/challenge.component').then(m => m.ChallengeComponent)},
    {path: '**' , redirectTo: 'home'}
];
