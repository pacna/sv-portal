import { CardResponse } from '../../../shared/types/api/card-response';
import { CardsApiService } from './../../../shared/services/cards-api.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Craft } from '../../../shared/types/customs';

@Component({
  selector: 'forestcraft-overview',
  templateUrl: './forestcraft-overview.component.html',
  styleUrls: ['./forestcraft-overview.component.scss'],
})
export class ForestcraftOverviewComponent implements OnInit {
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
    return this.cardsApiService.searchCards({ craft: Craft.forestcraft }).pipe(
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
