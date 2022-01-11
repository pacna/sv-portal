import { Routes } from '@angular/router';
import { RunecraftComponent } from './runecraft.component';

export const runeCraftRoutes: Routes = [
  {
    path: '',
    component: RunecraftComponent,
    children: [
      {
        path: '',
        redirectTo: 'runecraft',
        pathMatch: 'full',
      },
    ],
  },
];
