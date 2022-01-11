import { Routes } from '@angular/router';
import { ForestcraftComponent } from './forestcraft.component';

export const forestCraftRoutes: Routes = [
  {
    path: '',
    component: ForestcraftComponent,
    children: [
      {
        path: '',
        redirectTo: 'forestcraft',
        pathMatch: 'full',
      },
    ],
  },
];
