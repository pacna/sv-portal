import { Routes } from '@angular/router';
import { PortalcraftComponent } from './portalcraft.component';

export const portalCraftRoutes: Routes = [
  {
    path: '',
    component: PortalcraftComponent,
    children: [
      {
        path: '',
        redirectTo: 'portalcraft',
        pathMatch: 'full',
      },
    ],
  },
];
