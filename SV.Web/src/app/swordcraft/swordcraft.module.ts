import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SwordcraftComponent } from './swordcraft.component';
import { swordCraftRoutes } from './swordcraft.routing';

@NgModule({
  declarations: [SwordcraftComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(swordCraftRoutes),
    MatCardModule,
    MatGridListModule,
  ],
  exports: [SwordcraftComponent],
})
export class SwordcraftModule {}
