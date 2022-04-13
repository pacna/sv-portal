import { CardSearchRequest } from './../../../shared/types/api/card-search-request';
import { Craft } from './../../../shared/types/customs/craft.enum';
import { CardsApiService } from './../../../shared/services/cards-api.service';
import { CardResponse } from './../../../shared/types/api/card-response';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'neutral-overview',
  templateUrl: './neutral-overview.component.html',
  styleUrls: ['./neutral-overview.component.scss'],
})
export class NeutralOverviewComponent implements OnInit {
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
      .searchCards({ craft: Craft.neutral } as CardSearchRequest)
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
