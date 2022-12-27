// Angular
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Material
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

// Self
import { notFoundRoutes } from './not-found.routing';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(notFoundRoutes),
  ],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
