// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

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
