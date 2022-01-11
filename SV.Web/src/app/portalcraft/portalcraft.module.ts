import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { PortalcraftComponent } from './portalcraft.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { portalCraftRoutes } from './portalcraft.routing';

@NgModule({
  declarations: [PortalcraftComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(portalCraftRoutes),
    MatCardModule,
    MatGridListModule,
  ],
  exports: [PortalcraftComponent],
})
export class PortalcraftModule {}
