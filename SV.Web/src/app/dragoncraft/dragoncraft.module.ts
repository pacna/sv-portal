import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dragonCraftRoutes } from './dragoncraft.routing';
import { DragoncraftOverviewComponent } from './components/dragoncraft-overview/dragoncraft-overview.component';
import { DragoncraftDetailComponent } from './components/dragoncraft-detail/dragoncraft-detail.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CardManagementModule } from '@svportal/shared/modules/card-management';

@NgModule({
  declarations: [DragoncraftOverviewComponent, DragoncraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dragonCraftRoutes),
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    CardManagementModule,
  ],
})
export class DragoncraftModule {}
