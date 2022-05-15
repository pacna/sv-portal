// Angular
import { Routes } from '@angular/router';

// Self
import { BloodcraftDetailComponent } from './components/bloodcraft-detail/bloodcraft-detail.component';
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
  {
    path: ':id',
    component: BloodcraftDetailComponent,
  },
];
