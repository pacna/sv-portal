// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Shared
import { BaseOverviewModule, BaseDetailModule } from '@svportal/shared/modules';

// Self
import { shadowCraftRoutes } from './shadowcraft.routing';
import { ShadowcraftOverviewComponent } from './components/shadowcraft-overview/shadowcraft-overview.component';
import { ShadowcraftDetailComponent } from './components/shadowcraft-detail/shadowcraft-detail.component';

@NgModule({
  declarations: [ShadowcraftOverviewComponent, ShadowcraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(shadowCraftRoutes),
    BaseOverviewModule,
    BaseDetailModule,
  ],
})
export class ShadowcraftModule {}
