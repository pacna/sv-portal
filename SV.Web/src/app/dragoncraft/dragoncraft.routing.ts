import { Routes } from '@angular/router';
import { DragoncraftComponent } from './dragoncraft.component';

export const dragonCraftRoutes: Routes = [
  {
    path: '',
    component: DragoncraftComponent,
    children: [
      {
        path: '',
        redirectTo: 'dragoncraft',
        pathMatch: 'full',
      },
    ],
  },
];
