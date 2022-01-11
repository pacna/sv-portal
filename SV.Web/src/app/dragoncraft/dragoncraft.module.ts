import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { dragonCraftRoutes } from './dragoncraft.routing';
import { DragoncraftComponent } from './dragoncraft.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [DragoncraftComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dragonCraftRoutes),
    MatCardModule,
    MatGridListModule,
  ],
  exports: [DragoncraftComponent],
})
export class DragoncraftModule {}
