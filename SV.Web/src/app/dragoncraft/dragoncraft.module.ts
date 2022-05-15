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
import { dragonCraftRoutes } from './dragoncraft.routing';
import { DragoncraftOverviewComponent } from './components/dragoncraft-overview/dragoncraft-overview.component';
import { DragoncraftDetailComponent } from './components/dragoncraft-detail/dragoncraft-detail.component';

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
