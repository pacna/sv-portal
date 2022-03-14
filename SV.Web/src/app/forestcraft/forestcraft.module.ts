import { SharedModule } from './../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { forestCraftRoutes } from './forestcraft.routing';
import { ForestcraftOverviewComponent } from './components/forestcraft-overview/forestcraft-overview.component';
import { ForestcraftDetailComponent } from './components/forestcraft-detail/forestcraft-detail.component';

@NgModule({
  declarations: [ForestcraftOverviewComponent, ForestcraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(forestCraftRoutes),
    MatButtonModule,
    SharedModule,
  ],
})
export class ForestcraftModule {}
