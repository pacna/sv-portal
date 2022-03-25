import { ShadowcraftOverviewComponent } from './components/shadowcraft-overview/shadowcraft-overview.component';
import { Routes } from '@angular/router';

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
];
