import { Routes } from '@angular/router';
import { HavencraftDetailComponent } from './components/havencraft-detail/havencraft-detail.component';
import { HavencraftOverviewComponent } from './components/havencraft-overview/havencraft-overview.component';

export const havenCraftRoutes: Routes = [
  {
    path: '',
    component: HavencraftOverviewComponent,
    children: [
      {
        path: '',
        redirectTo: 'havencraft',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: ':id',
    component: HavencraftDetailComponent,
  },
];
