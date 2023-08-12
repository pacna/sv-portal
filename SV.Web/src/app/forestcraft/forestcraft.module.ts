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
import { forestCraftRoutes } from './forestcraft.routing';
import { ForestcraftOverviewComponent } from './components/forestcraft-overview/forestcraft-overview.component';
import { ForestcraftDetailComponent } from './components/forestcraft-detail/forestcraft-detail.component';

@NgModule({
  declarations: [ForestcraftOverviewComponent, ForestcraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(forestCraftRoutes),
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
export class ForestcraftModule {}
