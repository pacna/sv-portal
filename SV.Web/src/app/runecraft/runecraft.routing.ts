import { RunecraftOverviewComponent } from './components/runecraft-overview/runecraft-overview.component';
import { Routes } from '@angular/router';

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
];
