import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDetailComponent } from './base-detail.component';
import { PageContentComponent } from '../../components/page-content';
import { HeaderActionBarComponent } from '../../components/header-action-bar';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { MatIconModule } from '@angular/material/icon';
import { CardDeactivateComponent } from './components/card-deactivate/card-deactivate.component';
import { CardDescriptionComponent } from './components/card-description/card-description.component';
import { FollowerDescriptionComponent } from './components/follower-description/follower-description.component';

// Third party
import { LightboxConfig, LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';
import { CardCostPipe } from './pipes';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BaseDetailComponent,
    CardDeactivateComponent,
    CardDescriptionComponent,
    CardDetailsComponent,
    FollowerDescriptionComponent,
    CardCostPipe,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    HeaderActionBarComponent,
    PageContentComponent,
    // Third party
    GalleryModule,
    LightboxModule.withConfig({ panelClass: 'fullscreen' } as LightboxConfig),
  ],
  exports: [BaseDetailComponent],
})
export class BaseDetailModule {}
