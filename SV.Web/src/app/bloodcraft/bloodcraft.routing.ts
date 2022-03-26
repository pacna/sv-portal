import { Routes } from '@angular/router';
import { BloodcraftOverviewComponent } from './components/bloodcraft-overview/bloodcraft-overview.component';

export const bloodCraftRoutes: Routes = [
  {
    path: '',
    component: BloodcraftOverviewComponent,
    children: [
      {
        path: '',
        redirectTo: 'bloodcraft',
        pathMatch: 'full',
      },
    ],
  },
];
