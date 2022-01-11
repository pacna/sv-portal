import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { havenCraftRoutes } from './havencraft.routing';
import { HavencraftComponent } from './havencraft.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [HavencraftComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(havenCraftRoutes),
    MatCardModule,
    MatGridListModule,
  ],
  exports: [HavencraftComponent],
})
export class HavencraftModule {}
