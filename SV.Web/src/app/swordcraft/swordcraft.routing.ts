import { Routes } from '@angular/router';
import { SwordcraftComponent } from './swordcraft.component';

export const swordCraftRoutes: Routes = [
  {
    path: '',
    component: SwordcraftComponent,
    children: [
      {
        path: '',
        redirectTo: 'swordcraft',
        pathMatch: 'full',
      },
    ],
  },
];
