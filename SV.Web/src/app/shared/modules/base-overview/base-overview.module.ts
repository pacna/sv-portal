// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Third party
import { LightboxConfig, LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from 'ng-gallery';

// Self
import { BaseOverviewComponent } from './base-overview.component';
import { SVListComponent } from './components/sv-list/sv-list.component';
import { SVListItemComponent } from './components/sv-list-item/sv-list-item.component';
import { CardsFilterSearchComponent } from './components/cards-filter-search/cards-filter-search.component';

// Shared
import { HeaderActionBarComponent } from '../../components/header-action-bar/header-action-bar.component';
import { PageContentComponent } from '../../components/page-content/page-content.component';

@NgModule({
  declarations: [
    BaseOverviewComponent,
    CardsFilterSearchComponent,
    SVListComponent,
    SVListItemComponent,
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
    ReactiveFormsModule,
    FormsModule,
    GalleryModule,
    LightboxModule.withConfig({ panelClass: 'fullscreen' } as LightboxConfig),
    HeaderActionBarComponent,
    PageContentComponent,
  ],
  exports: [BaseOverviewComponent],
})
export class BaseOverviewModule {}
