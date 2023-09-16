// Angular
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'forestcraft',
    loadChildren: () =>
      import('./forestcraft').then((mod) => mod.ForestcraftModule),
  },
  {
    path: 'swordcraft',
    loadChildren: () =>
      import('./swordcraft').then((mod) => mod.SwordcraftModule),
  },
  {
    path: 'runecraft',
    loadChildren: () =>
      import('./runecraft').then((mod) => mod.RunecraftModule),
  },
  {
    path: 'dragoncraft',
    loadChildren: () =>
      import('./dragoncraft').then((mod) => mod.DragoncraftModule),
  },
  {
    path: 'shadowcraft',
    loadChildren: () =>
      import('./shadowcraft').then((mod) => mod.ShadowcraftModule),
  },
  {
    path: 'bloodcraft',
    loadChildren: () =>
      import('./bloodcraft').then((mod) => mod.BloodcraftModule),
  },
  {
    path: 'havencraft',
    loadChildren: () =>
      import('./havencraft').then((mod) => mod.HavencraftModule),
  },
  {
    path: 'portalcraft',
    loadChildren: () =>
      import('./portalcraft').then((mod) => mod.PortalcraftModule),
  },
  {
    path: 'neutral',
    loadChildren: () => import('./neutral').then((mod) => mod.NeutralModule),
  },
  {
    path: '404',
    loadComponent: () =>
      import('./shared/components/not-found').then(
        (mod) => mod.NotFoundComponent
      ),
  },
  {
    path: '',
    redirectTo: 'forestcraft',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
