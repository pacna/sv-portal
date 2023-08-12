// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Third party
import { LightboxConfig, LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';

// Self
import { BaseDetailComponent } from './base-detail.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CardDeactivateComponent } from './components/card-deactivate/card-deactivate.component';
import { CardDescriptionComponent } from './components/card-description/card-description.component';
import { FollowerDescriptionComponent } from './components/follower-description/follower-description.component';
import { CardCostPipe } from './pipes';

// Shared
import { HeaderActionBarComponent } from '../../components/header-action-bar';
import { PageContentComponent } from '../../components/page-content';
import { CardsApiService } from '../../services/cards-api.service';
import { CardManagementModule } from '../card-management';

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
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    CardManagementModule,
    HeaderActionBarComponent,
    PageContentComponent,
    // Third party
    GalleryModule,
    LightboxModule.withConfig({ panelClass: 'fullscreen' } as LightboxConfig),
  ],
  exports: [BaseDetailComponent],
  providers: [CardsApiService],
})
export class BaseDetailModule {}
