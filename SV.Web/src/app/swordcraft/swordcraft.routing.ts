import { Routes } from '@angular/router';
import { SwordcraftDetailComponent } from './components/swordcraft-detail/swordcraft-detail.component';
import { SwordcraftOverviewComponent } from './components/swordcraft-overview/swordcraft-overview.component';

export const swordCraftRoutes: Routes = [
  {
    path: '',
    component: SwordcraftOverviewComponent,
    children: [
      {
        path: '',
        redirectTo: 'swordcraft',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: ':id',
    component: SwordcraftDetailComponent,
  },
];
