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
import { portalCraftRoutes } from './portalcraft.routing';
import { PortalcraftOverviewComponent } from './components/portalcraft-overview/portalcraft-overview.component';
import { PortalcraftDetailComponent } from './components/portalcraft-detail/portalcraft-detail.component';

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
