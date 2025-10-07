import { Routes } from '@angular/router';
import { mainRoutes } from './pages/main/main.routes';
import { anonymGuard } from './guards/anonym-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
    canActivate: [anonymGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register').then((m) => m.Register),
    canActivate: [anonymGuard],
  },
  ...mainRoutes,
];
