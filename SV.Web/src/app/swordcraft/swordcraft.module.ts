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
import { swordCraftRoutes } from './swordcraft.routing';
import { SwordcraftOverviewComponent } from './components/swordcraft-overview/swordcraft-overview.component';
import { SwordcraftDetailComponent } from './components/swordcraft-detail/swordcraft-detail.component';

@NgModule({
  declarations: [SwordcraftOverviewComponent, SwordcraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(swordCraftRoutes),
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    CardManagementModule,
  ],
})
export class SwordcraftModule {}
