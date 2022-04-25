import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { forestCraftRoutes } from './forestcraft.routing';
import { ForestcraftOverviewComponent } from './components/forestcraft-overview/forestcraft-overview.component';
import { ForestcraftDetailComponent } from './components/forestcraft-detail/forestcraft-detail.component';
import { CardManagementModule } from '../shared/modules/card-management';
import { MatDialogModule } from '@angular/material/dialog';

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
  ],
})
export class ForestcraftModule {}
