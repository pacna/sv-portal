// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Third party
import { LightboxConfig, LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';

// Self
import { SVLayoutComponent } from './components/sv-layout/sv-layout.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SVListComponent } from './components/sv-list/sv-list.component';
import { SVListItemComponent } from './components/sv-list-item/sv-list-item.component';
import { HeaderActionBarComponent } from './components/header-action-bar/header-action-bar.component';
import { LoadingContentComponent } from './components/loading-content/loading-content.component';
import { CardDescriptionComponent } from './components/card-description/card-description.component';
import { FollowerDescriptionComponent } from './components/follower-description/follower-description.component';
import { FollowerDetailDescriptionComponent } from './components/follower-detail-description/follower-detail-description.component';
import { CardDetailsDescriptionComponent } from './components/card-details-description/card-details-description.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CardsFilterSearchComponent } from './components/cards-filter-search/cards-filter-search.component';
import { CardsApiService } from './services/cards-api.service';
import { CardDeactivateComponent } from './components/card-deactivate/card-deactivate.component';

@NgModule({
  declarations: [
    TopNavComponent,
    SVLayoutComponent,
    SVListComponent,
    SVListItemComponent,
    HeaderActionBarComponent,
    LoadingContentComponent,
    CardDetailsDescriptionComponent,
    CardDescriptionComponent,
    FollowerDescriptionComponent,
    FollowerDetailDescriptionComponent,
    CardDetailsComponent,
    CardsFilterSearchComponent,
    CardDeactivateComponent,
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
    LoadingContentComponent,
    CardDetailsDescriptionComponent,
    CardDetailsComponent,
    CardDescriptionComponent,
    FollowerDescriptionComponent,
    CardsFilterSearchComponent,
  ],
  providers: [CardsApiService],
})
export class SharedModule {}
