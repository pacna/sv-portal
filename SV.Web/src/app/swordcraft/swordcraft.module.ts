// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Shared
import { BaseOverviewModule, BaseDetailModule } from '@svportal/shared/modules';

// Self
import { swordCraftRoutes } from './swordcraft.routing';
import { SwordcraftOverviewComponent } from './components/swordcraft-overview/swordcraft-overview.component';
import { SwordcraftDetailComponent } from './components/swordcraft-detail/swordcraft-detail.component';

@NgModule({
  declarations: [SwordcraftOverviewComponent, SwordcraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(swordCraftRoutes),
    BaseOverviewModule,
    BaseDetailModule,
  ],
})
export class SwordcraftModule {}
