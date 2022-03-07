import { CardResponse } from './../shared/types/card-response';
import { CardsApiService } from './../shared/services/cards-api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'swordcraft',
  templateUrl: './swordcraft.component.html',
  styleUrls: ['./swordcraft.component.scss'],
})
export class SwordcraftComponent implements OnInit {
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
}
