import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseOverviewComponent } from './base-overview.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderActionBarComponent } from './components/header-action-bar/header-action-bar.component';
import { SVListComponent } from './components/sv-list/sv-list.component';
import { SVListItemComponent } from './components/sv-list-item/sv-list-item.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { CardsFilterSearchComponent } from './components/cards-filter-search/cards-filter-search.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EmptyContentComponent } from './components/empty-content/empty-content.component';
import { MatToolbarModule } from '@angular/material/toolbar';
// Third party
import { LightboxConfig, LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';

@NgModule({
  declarations: [
    BaseOverviewComponent,
    CardsFilterSearchComponent,
    HeaderActionBarComponent,
    PageContentComponent,
    SVListComponent,
    SVListItemComponent,
    EmptyContentComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    GalleryModule,
    LightboxModule.withConfig({ panelClass: 'fullscreen' } as LightboxConfig),
  ],
  exports: [
    BaseOverviewComponent,
    HeaderActionBarComponent,
    PageContentComponent,
  ],
})
export class BaseOverviewModule {}
