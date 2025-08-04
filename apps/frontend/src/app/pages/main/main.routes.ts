import { Routes } from '@angular/router';
import { Main } from './main';

export const mainRoutes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./main').then((m) => m.Main),
    children: [
      {
        path: '',
        redirectTo: 'links',
        pathMatch: 'full',
      },
      {
        path: 'links',
        loadComponent: () =>
          import('./components/links-builder/links-builder').then(
            (m) => m.LinksBuilder
          ),
      },
      {
        path: 'profile-details',
        loadComponent: () =>
          import('./components/profile-details/profile-details').then(
            (m) => m.ProfileDetails
          ),
      },
    ],
  },
];
