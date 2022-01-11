import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { neutralRoutes } from './neutral.routing';
import { NeutralComponent } from './neutral.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [NeutralComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(neutralRoutes),
    MatCardModule,
    MatGridListModule,
  ],
  exports: [NeutralComponent],
})
export class NeutralModule {}
