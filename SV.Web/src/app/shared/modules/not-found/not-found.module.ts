import { notFoundRoutes } from './not-found.routing';
import { NotFoundComponent } from './not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
