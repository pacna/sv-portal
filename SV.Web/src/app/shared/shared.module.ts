// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Third party
import { LightboxConfig, LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';

// Self
import { SVListComponent } from './components/sv-list/sv-list.component';
import { SVListItemComponent } from './components/sv-list-item/sv-list-item.component';
import { HeaderActionBarComponent } from './components/header-action-bar/header-action-bar.component';
import { CardDescriptionComponent } from './components/card-description/card-description.component';
import { FollowerDescriptionComponent } from './components/follower-description/follower-description.component';
import { FollowerDetailDescriptionComponent } from './components/follower-detail-description/follower-detail-description.component';
import { CardDetailsDescriptionComponent } from './components/card-details-description/card-details-description.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CardsFilterSearchComponent } from './components/cards-filter-search/cards-filter-search.component';
import { CardsApiService } from './services/cards-api.service';
import { CardDeactivateComponent } from './components/card-deactivate/card-deactivate.component';
import { EmptyContentComponent } from './components/empty-content/empty-content.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { CardCostPipe } from './pipes';

@NgModule({
  declarations: [
    SVListComponent,
    SVListItemComponent,
    HeaderActionBarComponent,
    CardDetailsDescriptionComponent,
    CardDescriptionComponent,
    FollowerDescriptionComponent,
    FollowerDetailDescriptionComponent,
    CardDetailsComponent,
    CardsFilterSearchComponent,
    CardDeactivateComponent,
    EmptyContentComponent,
    PageContentComponent,
    // Pipes
    CardCostPipe,
  ],
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    // Third party
    GalleryModule,
    LightboxModule.withConfig({ panelClass: 'fullscreen' } as LightboxConfig),

    // Material
    MatProgressSpinnerModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  exports: [
    SVListComponent,
    HeaderActionBarComponent,
    CardDetailsDescriptionComponent,
    CardDetailsComponent,
    CardDescriptionComponent,
    FollowerDescriptionComponent,
    CardsFilterSearchComponent,
    PageContentComponent,
  ],
  providers: [CardsApiService],
})
export class SharedModule {}
