// Angular
import { Routes } from '@angular/router';

// Self
import { DragoncraftOverviewComponent } from './components/dragoncraft-overview/dragoncraft-overview.component';
import { DragoncraftDetailComponent } from './components/dragoncraft-detail/dragoncraft-detail.component';

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
  {
    path: ':id',
    component: DragoncraftDetailComponent,
  },
];
