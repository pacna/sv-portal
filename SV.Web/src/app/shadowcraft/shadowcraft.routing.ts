import { Routes } from '@angular/router';
import { ShadowcraftComponent } from './shadowcraft.component';

export const shadowCraftRoutes: Routes = [
  {
    path: '',
    component: ShadowcraftComponent,
    children: [
      {
        path: '',
        redirectTo: 'shadowcraft',
        pathMatch: 'full',
      },
    ],
  },
];
