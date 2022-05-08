import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { bloodCraftRoutes } from './bloodcraft.routing';
import { BloodcraftOverviewComponent } from './components/bloodcraft-overview/bloodcraft-overview.component';
import { BloodcraftDetailComponent } from './components/bloodcraft-detail/bloodcraft-detail.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CardManagementModule } from '@svportal/shared/modules/card-management';

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
  ],
})
export class BloodcraftModule {}
