import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shadowCraftRoutes } from './shadowcraft.routing';
import { ShadowcraftOverviewComponent } from './components/shadowcraft-overview/shadowcraft-overview.component';
import { ShadowcraftDetailComponent } from './components/shadowcraft-detail/shadowcraft-detail.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CardManagementModule } from '@svportal/shared/modules/card-management';

@NgModule({
  declarations: [ShadowcraftOverviewComponent, ShadowcraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(shadowCraftRoutes),
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    CardManagementModule,
  ],
})
export class ShadowcraftModule {}
