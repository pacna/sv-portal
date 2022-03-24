import { CardsFilterRequest } from './../../../shared/types/customs/cards-filter-request';
import { CardSearchRequest } from './../../../shared/types/api/card-search-request';
import { CardResponse } from '../../../shared/types/api/card-response';
import { CardsApiService } from './../../../shared/services/cards-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  currentFilterRequest: CardsFilterRequest = {} as CardsFilterRequest;
  constructor(
    private readonly cardsApiService: CardsApiService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initFilterSearch().subscribe();
  }

  openFilter(): void {
    this.drawer.autoFocus = false;
    this.drawer.open();
  }

  initFilterSearch(): Observable<void> {
    return this.route.queryParams.pipe(
      untilDestroyed(this),
      switchMap((params: Params) => {
        this.currentFilterRequest = params as CardsFilterRequest;
        const hasParams: boolean =
          Object.keys(this.currentFilterRequest).length > 0;
        if (hasParams) {
          return this.searchCards({
            craft: !this.currentFilterRequest.isAll ? Craft.forestcraft : null,
            name: this.currentFilterRequest.name,
            rarities: this.currentFilterRequest.rarities,
            types: this.currentFilterRequest.types,
          } as CardSearchRequest);
        }

        return this.searchCards();
      })
    );
  }

  searchCards(
    request: CardSearchRequest = {
      craft: Craft.forestcraft,
    } as CardSearchRequest
  ): Observable<void> {
    return this.cardsApiService.searchCards(request).pipe(
      untilDestroyed(this),
      map((response: CardResponse[]) => {
        this.cards = response;
      })
    );
  }

  handleFilterRequest(filterRequest: CardsFilterRequest): void {
    this.drawer.close();

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: filterRequest,
    });
  }

  hasCards(): boolean {
    return this.cards.length > 0;
  }

  handleCardInfo(info: Pick<CardResponse, 'id' | 'craft'>): void {
    this.router.navigateByUrl(`${Craft[info.craft]}/${info.id}`);
  }
}
