// Angular
import { Routes } from '@angular/router';

// Self
import { ShadowcraftOverviewComponent } from './components/shadowcraft-overview/shadowcraft-overview.component';
import { ShadowcraftDetailComponent } from './components/shadowcraft-detail/shadowcraft-detail.component';

export const shadowCraftRoutes: Routes = [
  {
    path: '',
    component: ShadowcraftOverviewComponent,
    children: [
      {
        path: '',
        redirectTo: 'shadowcraft',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: ':id',
    component: ShadowcraftDetailComponent,
  },
];
