import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { swordCraftRoutes } from './swordcraft.routing';
import { SwordcraftOverviewComponent } from './components/swordcraft-overview/swordcraft-overview.component';
import { SwordcraftDetailComponent } from './components/swordcraft-detail/swordcraft-detail.component';

@NgModule({
  declarations: [SwordcraftOverviewComponent, SwordcraftDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(swordCraftRoutes),
    SharedModule,
    MatButtonModule,
  ],
})
export class SwordcraftModule {}
