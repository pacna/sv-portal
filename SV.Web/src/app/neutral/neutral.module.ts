import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { neutralRoutes } from './neutral.routing';
import { NeutralOverviewComponent } from './components/neutral-overview/neutral-overview.component';
import { NeutralDetailComponent } from './components/neutral-detail/neutral-detail.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CardManagementModule } from '@svportal/shared/modules/card-management';

@NgModule({
  declarations: [NeutralOverviewComponent, NeutralDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(neutralRoutes),
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    CardManagementModule,
  ],
})
export class NeutralModule {}
