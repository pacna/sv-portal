import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShadowcraftComponent } from './shadowcraft.component';
import { shadowCraftRoutes } from './shadowcraft.routing';

@NgModule({
  declarations: [ShadowcraftComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(shadowCraftRoutes),
    MatCardModule,
    MatGridListModule,
  ],
  exports: [ShadowcraftComponent],
})
export class ShadowcraftModule {}
