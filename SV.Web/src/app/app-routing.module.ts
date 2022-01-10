import { ForestcraftComponent } from './forestcraft/forestcraft.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwordcraftComponent } from './swordcraft/swordcraft.component';
import { RunecraftComponent } from './runecraft/runecraft.component';
import { DragoncraftComponent } from './dragoncraft/dragoncraft.component';
import { ShadowcraftComponent } from './shadowcraft/shadowcraft.component';
import { BloodcraftComponent } from './bloodcraft/bloodcraft.component';
import { HavencraftComponent } from './havencraft/havencraft.component';
import { PortalcraftComponent } from './portalcraft/portalcraft.component';
import { NeutralComponent } from './neutral/neutral.component';

const routes: Routes = [
  {
    path: 'forestcraft',
    component: ForestcraftComponent,
  },
  {
    path: 'swordcraft',
    component: SwordcraftComponent,
  },
  {
    path: 'runecraft',
    component: RunecraftComponent,
  },
  {
    path: 'dragoncraft',
    component: DragoncraftComponent,
  },
  {
    path: 'shadowcraft',
    component: ShadowcraftComponent,
  },
  {
    path: 'bloodcraft',
    component: BloodcraftComponent,
  },
  {
    path: 'havencraft',
    component: HavencraftComponent,
  },
  {
    path: 'portalcraft',
    component: PortalcraftComponent,
  },
  {
    path: 'neutral',
    component: NeutralComponent,
  },
  {
    path: '',
    redirectTo: 'forestcraft',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
