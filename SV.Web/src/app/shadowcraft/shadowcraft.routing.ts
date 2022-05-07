import { ShadowcraftOverviewComponent } from './components/shadowcraft-overview/shadowcraft-overview.component';
import { Routes } from '@angular/router';
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
