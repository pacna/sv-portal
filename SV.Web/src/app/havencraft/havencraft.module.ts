// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Shared
import { BaseOverviewModule, BaseDetailModule } from '@svportal/shared/modules';

// Self
import { havenCraftRoutes } from './havencraft.routing';
import { HavencraftOverviewComponent } from './components/havencraft-overview/havencraft-overview.component';
import { HavencraftDetailComponent } from './components/havencraft-detail/havencraft-detail.component';

@NgModule({
  declarations: [HavencraftOverviewComponent, HavencraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(havenCraftRoutes),
    BaseOverviewModule,
    BaseDetailModule,
  ],
})
export class HavencraftModule {}
