import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { portalCraftRoutes } from './portalcraft.routing';
import { PortalcraftOverviewComponent } from './components/portalcraft-overview/portalcraft-overview.component';
import { PortalcraftDetailComponent } from './components/portalcraft-detail/portalcraft-detail.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CardManagementModule } from '@svportal/shared/modules/card-management';

@NgModule({
  declarations: [PortalcraftOverviewComponent, PortalcraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(portalCraftRoutes),
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    CardManagementModule,
  ],
})
export class PortalcraftModule {}
