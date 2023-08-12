// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Shared
import { BaseOverviewModule, BaseDetailModule } from '@svportal/shared/modules';

// Self
import { neutralRoutes } from './neutral.routing';
import { NeutralOverviewComponent } from './components/neutral-overview/neutral-overview.component';
import { NeutralDetailComponent } from './components/neutral-detail/neutral-detail.component';

@NgModule({
  declarations: [NeutralOverviewComponent, NeutralDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(neutralRoutes),
    BaseOverviewModule,
    BaseDetailModule,
  ],
})
export class NeutralModule {}
