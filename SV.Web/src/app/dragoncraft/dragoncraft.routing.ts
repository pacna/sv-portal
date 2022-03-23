import { DragoncraftOverviewComponent } from './components/dragoncraft-overview/dragoncraft-overview.component';
import { Routes } from '@angular/router';

export const dragonCraftRoutes: Routes = [
  {
    path: '',
    component: DragoncraftOverviewComponent,
    children: [
      {
        path: '',
        redirectTo: 'dragoncraft',
        pathMatch: 'full',
      },
    ],
  },
];
