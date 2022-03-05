import { LightboxModule } from 'ng-gallery/lightbox';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { forestCraftRoutes } from './forestcraft.routing';
import { ForestcraftComponent } from './forestcraft.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { GalleryModule } from 'ng-gallery';

@NgModule({
  declarations: [ForestcraftComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(forestCraftRoutes),
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    SharedModule,
    LightboxModule,
    GalleryModule,
  ],
  exports: [ForestcraftComponent],
})
export class ForestcraftModule {}
