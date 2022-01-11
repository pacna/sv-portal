import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { BloodcraftComponent } from './bloodcraft.component';
import { bloodCraftRoutes } from './bloodcraft.routing';

@NgModule({
  declarations: [BloodcraftComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(bloodCraftRoutes),
    MatCardModule,
  ],
  exports: [BloodcraftComponent],
})
export class BloodcraftModule {}
