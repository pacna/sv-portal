import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { neutralRoutes } from './neutral.routing';
import { MatGridListModule } from '@angular/material/grid-list';
import { NeutralOverviewComponent } from './components/neutral-overview/neutral-overview.component';
import { NeutralDetailComponent } from './components/neutral-detail/neutral-detail.component';

@NgModule({
  declarations: [NeutralOverviewComponent, NeutralDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(neutralRoutes),
    MatCardModule,
    MatGridListModule,
    SharedModule,
    MatButtonModule,
  ],
})
export class NeutralModule {}
