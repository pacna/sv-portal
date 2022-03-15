import { CardSearchRequest } from './../../../shared/types/api/card-search-request';
import { CardResponse } from '../../../shared/types/api/card-response';
import { CardsApiService } from './../../../shared/services/cards-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Craft } from '../../../shared/types/customs';
import { MatDrawer } from '@angular/material/sidenav';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'forestcraft-overview',
  templateUrl: './forestcraft-overview.component.html',
  styleUrls: ['./forestcraft-overview.component.scss'],
})
export class ForestcraftOverviewComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  cards: CardResponse[] = [];
  forestCraftType: Craft = Craft.forestcraft;
  constructor(
    private readonly cardsApiService: CardsApiService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchCards().subscribe();
  }

  openFilter(): void {
    this.drawer.autoFocus = false;
    this.drawer.toggle();
  }

  searchCards(): Observable<void> {
    return this.cardsApiService
      .searchCards({ craft: Craft.forestcraft } as CardSearchRequest)
      .pipe(
        untilDestroyed(this),
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
