import { CardSearchRequest } from './../../../shared/types/api/card-search-request';
import { CardsApiService } from './../../../shared/services/cards-api.service';
import { CardResponse } from '../../../shared/types/api/card-response';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Craft } from '../../../shared/types/customs';

@Component({
  selector: 'swordcraft-overview',
  templateUrl: './swordcraft-overview.component.html',
  styleUrls: ['./swordcraft-overview.component.scss'],
})
export class SwordcraftOverviewComponent implements OnInit {
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
      .searchCards({ craft: Craft.swordcraft } as CardSearchRequest)
      .pipe(
        map((response: CardResponse[]) => {
          this.cards = response;
        })
      );
  }

  hasCards(): boolean {
    return this.cards.length > 0;
  }

  handleCardInfo(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
