import { NeutralOverviewComponent } from './components/neutral-overview/neutral-overview.component';
import { Routes } from '@angular/router';
import { NeutralDetailComponent } from './components/neutral-detail/neutral-detail.component';

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
  {
    path: ':id',
    component: NeutralDetailComponent,
  },
];
