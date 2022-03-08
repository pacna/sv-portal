import { ForestcraftOverviewComponent } from './components/forestcraft-overview/forestcraft-overview.component';
import { Routes } from '@angular/router';
import { ForestcraftDetailComponent } from './components/forestcraft-detail/forestcraft-detail.component';

export const forestCraftRoutes: Routes = [
  {
    path: '',
    component: ForestcraftOverviewComponent,
    children: [
      {
        path: '',
        redirectTo: 'forestcraft',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: ':id',
    component: ForestcraftDetailComponent,
  },
];
