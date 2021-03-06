// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';

// Shared
import { SharedModule } from './../shared/shared.module';
import { CardManagementModule } from '../shared/modules/card-management';

// Self
import { neutralRoutes } from './neutral.routing';
import { NeutralOverviewComponent } from './components/neutral-overview/neutral-overview.component';
import { NeutralDetailComponent } from './components/neutral-detail/neutral-detail.component';

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
