import { CardsApiService } from './../../../shared/services/cards-api.service';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CardResponse } from 'src/app/shared/types/api';
import { Craft } from 'src/app/shared/types/customs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'runecraft-overview',
  templateUrl: './runecraft-overview.component.html',
  styleUrls: ['./runecraft-overview.component.scss'],
})
export class RunecraftOverviewComponent implements OnInit {
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
    return this.cardsApiService.searchCards({ craft: Craft.runecraft }).pipe(
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
