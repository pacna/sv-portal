import { Routes } from '@angular/router';
import { BloodcraftComponent } from './bloodcraft.component';

export const bloodCraftRoutes: Routes = [
  {
    path: '',
    component: BloodcraftComponent,
    children: [
      {
        path: '',
        redirectTo: 'bloodcraft',
        pathMatch: 'full',
      },
    ],
  },
];
