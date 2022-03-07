import { CardResponse } from './../shared/types/card-response';
import { CardsApiService } from './../shared/services/cards-api.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'forestcraft',
  templateUrl: './forestcraft.component.html',
  styleUrls: ['./forestcraft.component.scss'],
})
export class ForestcraftComponent implements OnInit {
  cards: CardResponse[] = [];
  constructor(private readonly cardsApiService: CardsApiService) {}

  ngOnInit(): void {
    this.searchCards().subscribe();
  }

  searchCards(): Observable<void> {
    return this.cardsApiService.searchCards().pipe(
      map((response: CardResponse[]) => {
        this.cards = response;
      })
    );
  }

  hasCards(): boolean {
    return this.cards.length > 0;
  }
}
