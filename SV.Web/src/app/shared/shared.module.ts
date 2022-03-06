import { LightboxModule } from 'ng-gallery/lightbox';
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

@NgModule({
  declarations: [
    TopNavComponent,
    SVLayoutComponent,
    SVListComponent,
    SVListItemComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    GalleryModule,
    LightboxModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTabsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [TopNavComponent, SVLayoutComponent, SVListComponent],
  providers: [CardsApiService],
})
export class SharedModule {}
