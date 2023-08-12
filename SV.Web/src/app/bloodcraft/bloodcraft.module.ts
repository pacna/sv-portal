// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Shared
import { BaseOverviewModule, BaseDetailModule } from '@svportal/shared/modules';

// Self
import { bloodCraftRoutes } from './bloodcraft.routing';
import { BloodcraftDetailComponent } from './components/bloodcraft-detail/bloodcraft-detail.component';
import { BloodcraftOverviewComponent } from './components/bloodcraft-overview/bloodcraft-overview.component';

@NgModule({
  declarations: [BloodcraftOverviewComponent, BloodcraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(bloodCraftRoutes),
    BaseOverviewModule,
    BaseDetailModule,
  ],
})
export class BloodcraftModule {}
