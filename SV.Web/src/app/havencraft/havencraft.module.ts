import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { havenCraftRoutes } from './havencraft.routing';
import { HavencraftOverviewComponent } from './components/havencraft-overview/havencraft-overview.component';
import { HavencraftDetailComponent } from './components/havencraft-detail/havencraft-detail.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CardManagementModule } from '@svportal/shared/modules/card-management';

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
