import { CardsApiService } from './../../../shared/services/cards-api.service';
import { CardSearchRequest } from './../../../shared/types/api/card-search-request';
import { Craft } from 'src/app/shared/types/customs';
import { CardResponse } from 'src/app/shared/types/api';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'havencraft-overview',
  templateUrl: './havencraft-overview.component.html',
  styleUrls: ['./havencraft-overview.component.scss'],
})
export class HavencraftOverviewComponent implements OnInit {
  cards: CardResponse[] = [];
  constructor(
    private readonly cardsApiService: CardsApiService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchCards().subscribe();
  }

  searchCards(): Observable<void> {
    return this.cardsApiService
      .searchCards({ craft: Craft.havencraft } as CardSearchRequest)
      .pipe(
        map((response: CardResponse[]) => {
          this.cards = response;
        })
      );
  }

  hasCards(): boolean {
    return this.cards.length > 0;
  }

  handleCardInfo(info: Pick<CardResponse, 'id' | 'craft'>): void {
    this.router.navigateByUrl(`${Craft[info.craft]}/${info.id}`);
  }
}
