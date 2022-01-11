import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { RunecraftComponent } from './runecraft.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { runeCraftRoutes } from './runecraft.routing';

@NgModule({
  declarations: [RunecraftComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(runeCraftRoutes),
    MatCardModule,
    MatGridListModule,
  ],
  exports: [RunecraftComponent],
})
export class RunecraftModule {}
