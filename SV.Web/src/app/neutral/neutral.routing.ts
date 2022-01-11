import { Routes } from '@angular/router';
import { NeutralComponent } from './neutral.component';

export const neutralRoutes: Routes = [
  {
    path: '',
    component: NeutralComponent,
    children: [
      {
        path: '',
        redirectTo: 'neutral',
        pathMatch: 'full',
      },
    ],
  },
];
