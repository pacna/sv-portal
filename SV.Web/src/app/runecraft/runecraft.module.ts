import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { runeCraftRoutes } from './runecraft.routing';
import { RunecraftDetailComponent } from './components/runecraft-detail/runecraft-detail.component';
import { RunecraftOverviewComponent } from './components/runecraft-overview/runecraft-overview.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RunecraftDetailComponent, RunecraftOverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(runeCraftRoutes),
    SharedModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule
  ],
})
export class RunecraftModule {}
