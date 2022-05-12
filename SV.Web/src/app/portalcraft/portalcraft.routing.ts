import { Routes } from '@angular/router';
import { PortalcraftDetailComponent } from './components/portalcraft-detail/portalcraft-detail.component';
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
  {
    path: ':id',
    component: PortalcraftDetailComponent,
  },
];
