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
    BaseOverviewModule,
    BaseDetailModule,
  ],
})
export class SwordcraftModule {}
