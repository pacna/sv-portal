// Angular
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Material
import { MatButtonModule } from '@angular/material/button';

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
