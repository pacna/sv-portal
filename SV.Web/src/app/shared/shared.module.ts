// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Self
import { CardsApiService } from './services/cards-api.service';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,
  ],
  providers: [CardsApiService],
})
export class SharedModule {}
