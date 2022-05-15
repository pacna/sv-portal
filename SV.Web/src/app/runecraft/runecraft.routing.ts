// Angular
import { Routes } from '@angular/router';

// Self
import { RunecraftOverviewComponent } from './components/runecraft-overview/runecraft-overview.component';
import { RunecraftDetailComponent } from './components/runecraft-detail/runecraft-detail.component';

export const runeCraftRoutes: Routes = [
  {
    path: '',
    component: RunecraftOverviewComponent,
    children: [
      {
        path: '',
        redirectTo: 'runecraft',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: ':id',
    component: RunecraftDetailComponent,
  },
];
