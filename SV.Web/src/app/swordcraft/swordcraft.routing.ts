import { Routes } from '@angular/router';
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
];
