import { Craft } from 'src/app/shared/types/customs';
import { CardResponse } from 'src/app/shared/types/api';
import { CardsApiService } from './../../../shared/services/cards-api.service';
import { CardSearchRequest } from './../../../shared/types/api/card-search-request';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dragoncraft-overview',
  templateUrl: './dragoncraft-overview.component.html',
  styleUrls: ['./dragoncraft-overview.component.scss'],
})
export class DragoncraftOverviewComponent implements OnInit {
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
      .searchCards({ craft: Craft.dragoncraft } as CardSearchRequest)
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
