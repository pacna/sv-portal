// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';

// Third party
import { LightboxConfig, LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';

// Self
import { SVLayoutComponent } from './components/sv-layout/sv-layout.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
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

@NgModule({
  declarations: [
    TopNavComponent,
    SVLayoutComponent,
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
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule,
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
    MatTabsModule,
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
    TopNavComponent,
    SVLayoutComponent,
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
