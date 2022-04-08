import { Routes } from '@angular/router';
import { PortalcraftOverviewComponent } from './components/portalcraft-overview/portalcraft-overview.component';

export const portalCraftRoutes: Routes = [
  {
    path: '',
    component: PortalcraftOverviewComponent,
    children: [
      {
        path: '',
        redirectTo: 'portalcraft',
        pathMatch: 'full',
      },
    ],
  },
];
