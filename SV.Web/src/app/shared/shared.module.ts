import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LightboxConfig, LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { CardsApiService } from './services/cards-api.service';
import { SVLayoutComponent } from './components/sv-layout/sv-layout.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { SVListComponent } from './components/sv-list/sv-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SVListItemComponent } from './components/sv-list-item/sv-list-item.component';
import { HeaderActionBarComponent } from './components/header-action-bar/header-action-bar.component';
import { LoadingContentComponent } from './components/loading-content/loading-content.component';
import { MatListModule } from '@angular/material/list';
import { CardDescriptionComponent } from './components/card-description/card-description.component';
import { FollowerDescriptionComponent } from './components/follower-description/follower-description.component';
import { FollowerDetailDescriptionComponent } from './components/follower-detail-description/follower-detail-description.component';
import { CardDetailsDescriptionComponent } from './components/card-details-description/card-details-description.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CardsFilterSearchComponent } from './components/cards-filter-search/cards-filter-search.component';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    GalleryModule,
    LightboxModule.withConfig({ panelClass: 'fullscreen' } as LightboxConfig),
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
    MatChipsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
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
