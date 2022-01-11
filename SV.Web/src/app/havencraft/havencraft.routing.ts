import { Routes } from '@angular/router';
import { HavencraftComponent } from './havencraft.component';

export const havenCraftRoutes: Routes = [
  {
    path: '',
    component: HavencraftComponent,
    children: [
      {
        path: '',
        redirectTo: 'havencraft',
        pathMatch: 'full',
      },
    ],
  },
];
