import { RouterModule } from '@angular/router';
import { CardsApiService } from './services/cards-api.service';
import { SVLayoutComponent } from './components/sv-layout/sv-layout.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TopNavComponent, SVLayoutComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [TopNavComponent, SVLayoutComponent],
  providers: [CardsApiService],
})
export class SharedModule {}
