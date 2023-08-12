// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Shared
import { BaseOverviewModule, BaseDetailModule } from '@svportal/shared/modules';

// Self
import { dragonCraftRoutes } from './dragoncraft.routing';
import { DragoncraftOverviewComponent } from './components/dragoncraft-overview/dragoncraft-overview.component';
import { DragoncraftDetailComponent } from './components/dragoncraft-detail/dragoncraft-detail.component';

@NgModule({
  declarations: [DragoncraftOverviewComponent, DragoncraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dragonCraftRoutes),
    BaseOverviewModule,
    BaseDetailModule,
  ],
})
export class DragoncraftModule {}
