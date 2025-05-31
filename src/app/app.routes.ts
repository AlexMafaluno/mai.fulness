import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)},
    {path: 'desafios', loadComponent: () => import('./components/challenge-list/challenge-list.component').then(m => m.ChallengeListComponent)},
    
    {path: '**' , loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)}
];
