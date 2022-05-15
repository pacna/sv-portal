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
import { havenCraftRoutes } from './havencraft.routing';
import { HavencraftOverviewComponent } from './components/havencraft-overview/havencraft-overview.component';
import { HavencraftDetailComponent } from './components/havencraft-detail/havencraft-detail.component';

@NgModule({
  declarations: [HavencraftOverviewComponent, HavencraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(havenCraftRoutes),
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    CardManagementModule,
  ],
})
export class HavencraftModule {}
