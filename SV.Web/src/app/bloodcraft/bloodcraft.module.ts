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
import { SharedModule } from '@svportal/shared/shared.module';
import {
  CardManagementModule,
  BaseOverviewModule,
  BaseDetailModule,
} from '@svportal/shared/modules';

// Self
import { bloodCraftRoutes } from './bloodcraft.routing';
import { BloodcraftDetailComponent } from './components/bloodcraft-detail/bloodcraft-detail.component';
import { BloodcraftOverviewComponent } from './components/bloodcraft-overview/bloodcraft-overview.component';

@NgModule({
  declarations: [BloodcraftOverviewComponent, BloodcraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(bloodCraftRoutes),
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    CardManagementModule,
    BaseOverviewModule,
    BaseDetailModule,
  ],
})
export class BloodcraftModule {}
