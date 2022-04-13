import { NeutralOverviewComponent } from './components/neutral-overview/neutral-overview.component';
import { Routes } from '@angular/router';

export const neutralRoutes: Routes = [
  {
    path: '',
    component: NeutralOverviewComponent,
    children: [
      {
        path: '',
        redirectTo: 'neutral',
        pathMatch: 'full',
      },
    ],
  },
];
