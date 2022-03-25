import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shadowCraftRoutes } from './shadowcraft.routing';
import { ShadowcraftOverviewComponent } from './components/shadowcraft-overview/shadowcraft-overview.component';
import { ShadowcraftDetailComponent } from './components/shadowcraft-detail/shadowcraft-detail.component';

@NgModule({
  declarations: [ShadowcraftOverviewComponent, ShadowcraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(shadowCraftRoutes),
    SharedModule,
    MatButtonModule,
  ],
})
export class ShadowcraftModule {}
