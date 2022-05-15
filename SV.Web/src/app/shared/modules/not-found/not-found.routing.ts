// Angular
import { Routes } from '@angular/router';

// Self
import { NotFoundComponent } from './not-found.component';

export const notFoundRoutes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
    children: [
      {
        path: '',
        redirectTo: '404',
        pathMatch: 'full',
      },
    ],
  },
];
