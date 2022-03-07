import { SharedModule } from './../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { forestCraftRoutes } from './forestcraft.routing';
import { ForestcraftComponent } from './forestcraft.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ForestcraftComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(forestCraftRoutes),
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    SharedModule,
  ],
  exports: [ForestcraftComponent],
})
export class ForestcraftModule {}
