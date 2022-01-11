import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { forestCraftRoutes } from './forestcraft.routing';
import { ForestcraftComponent } from './forestcraft.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [ForestcraftComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(forestCraftRoutes),
    MatCardModule,
    MatGridListModule,
  ],
  exports: [ForestcraftComponent],
})
export class ForestcraftModule {}
