import { RunecraftOverviewComponent } from './components/runecraft-overview/runecraft-overview.component';
import { Routes } from '@angular/router';
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
