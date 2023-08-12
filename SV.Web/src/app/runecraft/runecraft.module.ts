// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';

// Shared
import { SharedModule } from '@svportal/shared/shared.module';
import {
  CardManagementModule,
  BaseOverviewModule,
} from '@svportal/shared/modules';
import { HeaderActionBarComponent } from '@svportal/shared/components/header-action-bar';
import { PageContentComponent } from '@svportal/shared/components/page-content';

// Self
import { runeCraftRoutes } from './runecraft.routing';
import { RunecraftDetailComponent } from './components/runecraft-detail/runecraft-detail.component';
import { RunecraftOverviewComponent } from './components/runecraft-overview/runecraft-overview.component';

@NgModule({
  declarations: [RunecraftDetailComponent, RunecraftOverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(runeCraftRoutes),
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    CardManagementModule,
    BaseOverviewModule,
    // Standalone
    HeaderActionBarComponent,
    PageContentComponent,
  ],
})
export class RunecraftModule {}
